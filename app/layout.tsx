import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AppShell } from '@/components/layout/AppShell';
export const metadata: Metadata = {metadataBase:new URL('https://checkup.ir'),title:{default:'CHECKUP | توسعه مدیریتی سازمان‌های درمانی',template:'%s | CHECKUP'},description:'وب‌سایت شرکتی CHECKUP برای معرفی چکاپ مدیریتی، مسیرهای فرصت و همکاری راهبردی با سازمان‌های درمانی خصوصی.',openGraph:{title:'CHECKUP',description:'توسعه مدیریتی سازمان‌های درمانی خصوصی',url:'https://checkup.ir',siteName:'CHECKUP',locale:'fa_IR',type:'website'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body><AppShell>{children}</AppShell></body></html>}
