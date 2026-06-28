import type { LucideIcon } from 'lucide-react';

type Emphasis = 'normal' | 'high';

type CardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  emphasis?: Emphasis;
  className?: string;
};

function Icon({ I, emphasis = 'normal' }: { I?: LucideIcon; emphasis?: Emphasis }) {
  return <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${emphasis === 'high' ? 'bg-primary text-white' : 'bg-primary-soft text-primary'}`}>{I && <I size={24} />}</div>;
}

export function FeatureCard({ title, description, icon, emphasis = 'normal', className = '' }: CardProps) {
  return <article className={`h-full rounded-2xl border border-border bg-white p-8 transition duration-200 hover:-translate-y-1 ${emphasis === 'high' ? 'shadow-large ring-1 ring-primary/10' : 'shadow-small'} ${className}`}><Icon I={icon} emphasis={emphasis} /><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-text-secondary">{description}</p></article>;
}

export const FrameworkCard = FeatureCard;
export const OpportunityCard = FeatureCard;
export const ValueCard = FeatureCard;
export const PrincipleCard = FeatureCard;
export const DeliverableCard = FeatureCard;

export function StatCard({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl bg-primary p-8 text-white shadow-large"><strong className="block text-4xl font-black">{value}</strong><span className="mt-3 block text-sm text-white/80">{label}</span></div>;
}

export function InsightCard({ title, summary, featured = false }: { title: string; summary: string; featured?: boolean }) {
  return <article className={`rounded-2xl border border-border bg-white p-7 ${featured ? 'shadow-large md:min-h-[260px]' : 'shadow-small'}`}><span className="text-xs font-bold text-primary">بینش مدیریتی · ۵ دقیقه</span><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-3 leading-8 text-text-secondary">{summary}</p></article>;
}

export function CaseStudyCard({ category, challenge, approach, outcome, featured = false }: { category: string; challenge: string; approach: string; outcome: string; featured?: boolean }) {
  return <article className={`rounded-3xl bg-white p-8 ring-1 ring-border ${featured ? 'shadow-large md:-mt-6' : 'shadow-small'}`}><p className="font-bold text-primary">{category}</p><h3 className="mt-4 text-2xl font-black">{challenge}</h3><p className="mt-4 leading-7 text-text-secondary">{approach}</p><p className="mt-6 rounded-2xl bg-surface-soft p-4 text-sm font-bold">{outcome}</p></article>;
}

export function ContactCard({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-border bg-white p-6 shadow-small"><h3 className="font-black">{title}</h3><p className="mt-2 text-text-secondary">{text}</p></div>;
}
