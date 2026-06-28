import { Hero } from '@/components/hero/Hero';import { pageCopy } from '@/content/site';import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';import { CTASection } from '@/components/sections/CTASection';
export default function Page(){return <><Hero title={pageCopy.casesPage[0]} subtitle={pageCopy.casesPage[1]} tone="evidence"/><CaseStudiesSection/><CTASection/></>}
