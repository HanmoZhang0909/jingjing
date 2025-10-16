import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLanguageSwitcher from "@/components/FloatingLanguageSwitcher";
import PageContent from "@/components/PageContent";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });
const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "东莞晶晶表面技术有限公司",
  description: "东莞晶晶表面技术有限公司 - 专注于金属表面处理行业的领先企业，专业从事镀铬技术研发、化工产品生产销售、镀铬设备及配件制造",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} ${notoSansSC.variable} font-sans min-h-screen flex flex-col`}>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </PageContent>
          <FloatingLanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  );
}
