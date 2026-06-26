import { Header } from '@/components/navigation/Header';import { Footer } from '@/components/navigation/Footer';
export function AppShell({children}:{children:React.ReactNode}){return <><Header/><main>{children}</main><Footer/></>}
