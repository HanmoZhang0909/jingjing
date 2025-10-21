"use client";

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MapComponentProps {
  className?: string;
}

export default function MapComponent({ className = "w-full h-96" }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    // 高德地图API配置
    const initMap = () => {
      if (typeof window !== 'undefined' && window.AMap && mapRef.current) {
        // 公司地址坐标 (东莞市石碣镇横滘向阳街2号楼101室)
        const companyLocation: [number, number] = [113.812, 23.098]; // 东莞市石碣镇的大概坐标
        
        // 创建地图实例
        const map = new window.AMap.Map(mapRef.current, {
          zoom: 16,
          center: companyLocation,
          mapStyle: 'amap://styles/normal'
        });

        // 添加标记点
        const marker = new window.AMap.Marker({
          position: companyLocation,
          title: language === 'zh' ? '东莞晶晶新材料有限公司' : 'Dongguan Jingjing New Materials Co., Ltd.'
        });

        map.add(marker);

        // 添加信息窗口
        const infoWindow = new window.AMap.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: #333;">
                ${language === 'zh' ? '东莞晶晶新材料有限公司' : 'Dongguan Jingjing New Materials Co., Ltd.'}
              </h3>
              <p style="margin: 0 0 5px 0; font-size: 12px; color: #666; line-height: 1.4;">
                ${language === 'zh' 
                  ? '广东省东莞市石碣镇横滘向阳街2号楼101室' 
                  : 'Room 101, Building 2, No. 2, Xiangyang Street, Hengjiao, Shijie Town, Dongguan City, Guangdong Province, China'
                }
              </p>
              <p style="margin: 0; font-size: 12px; color: #666;">
                ${language === 'zh' ? '联系电话: 13790181730' : 'Phone: 13790181730'}
                <br/>
                ${language === 'zh' ? '联系人: 张宗寿' : 'Contact: Tristan Zhang'}
              </p>
            </div>
          `,
          offset: new window.AMap.Pixel(0, -30)
        });

        marker.on('click', () => {
          infoWindow.open(map, marker.getPosition());
        });

        // 自动打开信息窗口
        infoWindow.open(map, marker.getPosition());
      }
    };

    // 动态加载高德地图API
    const loadAMapScript = () => {
      if (typeof window !== 'undefined' && !window.AMap) {
        const script = document.createElement('script');
        script.src = 'https://webapi.amap.com/maps?v=2.0&key=9257a501eceb62361c592fd558387b7e&plugin=AMap.InfoWindow';
        script.async = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else if (window.AMap) {
        initMap();
      }
    };

    loadAMapScript();

    return () => {
      // 清理函数
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, [language]);

  return (
    <div className={className}>
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-lg border border-gray-300"
        style={{ minHeight: '300px' }}
      />
      <div className="mt-2 text-sm text-gray-500 text-center">
        {language === 'zh' 
          ? '地图服务由高德地图提供' 
          : 'Map service provided by AMap'
        }
      </div>
    </div>
  );
}

// 高德地图API类型定义
interface AMapMapOptions {
  zoom?: number;
  center?: [number, number];
  mapStyle?: string;
}

interface AMapMarkerOptions {
  position: [number, number];
  title?: string;
}

interface AMapInfoWindowOptions {
  content: string;
  offset?: AMapPixel;
}

interface AMapPixel {
  x: number;
  y: number;
}

interface AMapMap {
  add: (marker: AMapMarker) => void;
}

interface AMapMarker {
  on: (event: string, callback: () => void) => void;
  getPosition: () => [number, number];
}

interface AMapInfoWindow {
  open: (map: AMapMap, position: [number, number]) => void;
}

// 扩展Window接口以包含AMap
declare global {
  interface Window {
    AMap: {
      Map: new (container: HTMLElement, options: AMapMapOptions) => AMapMap;
      Marker: new (options: AMapMarkerOptions) => AMapMarker;
      InfoWindow: new (options: AMapInfoWindowOptions) => AMapInfoWindow;
      Pixel: new (x: number, y: number) => AMapPixel;
    };
  }
}
