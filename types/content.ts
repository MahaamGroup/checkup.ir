import type { LucideIcon } from 'lucide-react';
export type NavItem={label:string;href:string};
export type CardItem={title:string;description:string;icon?:LucideIcon;badge?:string;href?:string;meta?:string;category?:string};
export type HeroContent={eyebrow?:string;title:string;subtitle:string;primary?:{label:string;href:string};secondary?:{label:string;href:string};variant?:'default'|'compact'|'centered'};
export type FaqItem={question:string;answer:string};
