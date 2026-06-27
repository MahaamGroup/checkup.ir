import type { Metadata } from 'next';import './globals.css';import { AppShell } from '@/components/layout/AppShell';
export const metadata:Metadata={title:'CHECKUP | چکاپ مدیریتی',description:'وب‌سایت شرکتی CHECKUP برای سازمان‌های سلامت خصوصی'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body><AppShell>{children}</AppShell></body></html>}
