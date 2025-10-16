#!/bin/bash

# 部署脚本
echo "🚀 开始部署 Jingjing 项目..."

# 检查Docker是否运行
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker未运行，请先启动Docker"
    exit 1
fi

# 停止现有容器
echo "🛑 停止现有容器..."
docker-compose down

# 清理旧镜像（可选）
echo "🧹 清理旧镜像..."
docker system prune -f

# 构建并启动服务
echo "🔨 构建并启动服务..."
docker-compose up -d --build

# 等待服务启动
echo "⏳ 等待服务启动..."
sleep 30

# 检查服务状态
echo "📊 检查服务状态..."
docker-compose ps

# 显示日志
echo "📝 显示服务日志..."
docker-compose logs --tail=50

echo "✅ 部署完成！"
echo "🌐 前端地址: https://your-domain.com"
echo "🔧 API地址: https://your-domain.com/api"
echo ""
echo "📋 常用命令："
echo "  查看日志: docker-compose logs -f"
echo "  重启服务: docker-compose restart"
echo "  停止服务: docker-compose down"
echo "  更新服务: docker-compose pull && docker-compose up -d"
