import { CardGridSection, CTASection, Hero } from '@/components/sections/Sections';import { cases } from '@/content/site';
export default function Page(){return <><Hero content={{eyebrow:'مطالعات موردی',title:'سناریوهای مدیریتی قابل لمس',subtitle:'نمونه‌هایی از چالش، رویکرد و نتیجه در زمینه سازمان‌های درمانی خصوصی.'}}/><CardGridSection title="مطالعات موردی" items={cases}/><CTASection/></>}
