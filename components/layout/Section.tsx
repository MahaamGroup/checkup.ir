import { cn } from '@/lib/utils';
export function Section({children,className,id,tint=false}:{children:React.ReactNode;className?:string;id?:string;tint?:boolean}){return <section id={id} className={cn('py-[72px] md:py-24 xl:py-[120px]',tint?'bg-surface-soft':'bg-background',className)}>{children}</section>}
