import { Hero } from '@/components/hero/Hero';import { pageCopy } from '@/content/site';import { ContactSection } from '@/components/sections/ContactSection';
export default function Page(){return <><Hero title={pageCopy.contact[0]} subtitle={pageCopy.contact[1]} tone="minimal"/><ContactSection/></>}
