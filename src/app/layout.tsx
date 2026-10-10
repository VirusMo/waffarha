import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "وفّرها | Waffarha",
  description:
    "وفّرها — مشروع جامعي لتصميم نظام ذكي منخفض التكلفة لمتابعة استهلاك الطاقة في المنازل المصرية.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
