import { Hero } from '@/components/hero/Hero';import { pageCopy } from '@/content/site';import { InsightsSection } from '@/components/sections/InsightsSection';import { CTASection } from '@/components/sections/CTASection';
export default function Page(){return <><Hero title={pageCopy.insightsPage[0]} subtitle={pageCopy.insightsPage[1]} tone="editorial"/><InsightsSection/><CTASection/></>}
