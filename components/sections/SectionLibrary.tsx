import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/typography/SectionTitle';
import { Button } from '@/components/ui/Button';
import { FeatureCard, FrameworkCard, OpportunityCard, InsightCard, CaseStudyCard, StatCard, ContactCard, DeliverableCard, ValueCard, PrincipleCard } from '@/components/cards/Cards';
import { cta, features, frameworks, opportunities, process, insights, cases, faqs } from '@/content/site';
import { AssessmentDiagram, FrameworkDiagram, OpportunityDiagram, ProcessDiagram, TimelineDiagram } from '@/components/diagrams/Diagrams';

export function FeatureGridSection({ title = 'چرا چکاپ', tone = 'white' }: { title?: string; tone?: 'white' | 'soft' | 'tint' }) {
  return <Section tone={tone} rhythm="context" intention="explain"><SectionTitle eyebrow="چارچوب تصمیم" title={title} description="سه محور اصلی که چکاپ را از توصیه‌های پراکنده مدیریتی متمایز می‌کند." /><div className="grid gap-6 md:grid-cols-[1.15fr_.92fr_.92fr]">{features.map(([t, d, I], index) => <FeatureCard key={t as string} title={t as string} description={d as string} icon={I} emphasis={index === 0 ? 'high' : 'normal'} />)}</div></Section>;
}

export function FrameworkSection({ tone = 'soft' }: { tone?: 'white' | 'soft' | 'tint' }) {
  return <Section tone={tone} rhythm="anchor" intention="guide"><div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]"><FrameworkDiagram /><div><SectionTitle eyebrow="Framework" title="چارچوب اختصاصی چکاپ" description="از تشخیص تا اقدام، هر مرحله با زبان اجرایی و قابل پیگیری تعریف می‌شود." /><div className="grid gap-5">{frameworks.map(([t, d, I], index) => <FrameworkCard key={t as string} title={t as string} description={d as string} icon={I} emphasis={index === 1 ? 'high' : 'normal'} />)}</div></div></div></Section>;
}

export function OpportunitySection() {
  return <Section tone="tint" rhythm="soft" intention="orient"><SectionTitle eyebrow="Opportunity Paths" title="مسیرهای فرصت" description="فرصت‌ها فقط در بازار نیستند؛ در ساختار، تجربه و ریتم تصمیم‌گیری نیز پنهان‌اند." /><div className="grid items-start gap-6 md:grid-cols-[.95fr_1.15fr_.9fr]">{opportunities.map(([t, d, I], index) => <OpportunityCard key={t as string} title={t as string} description={d as string} icon={I} emphasis={index === 1 ? 'high' : 'normal'} className={index === 1 ? 'md:mt-10' : index === 2 ? 'md:mt-20' : ''} />)}</div></Section>;
}

export function ProcessSection({ diagram = false }: { diagram?: boolean }) {
  return <Section tone="white" rhythm={diagram ? 'focus' : 'dense'} intention="guide"><div className="grid gap-12 lg:grid-cols-[1.18fr_.82fr]">{diagram ? <ProcessDiagram /> : <TimelineDiagram />}<div><SectionTitle eyebrow="Process" title="فرآیند همکاری" description="حرکت مرحله‌به‌مرحله، شفاف و قابل بازبینی." /><div className="grid gap-4">{process.map(([n, t, d], index) => <div key={n} className={`rounded-2xl border border-border bg-white p-5 ${index === 0 || index === 5 ? 'shadow-medium' : 'shadow-small'}`}><b className="text-primary">{n}</b><h3 className="mt-2 font-black">{t}</h3><p className="text-text-secondary">{d}</p></div>)}</div></div></div></Section>;
}

export function InsightsSection() {
  return <Section tone="warm" rhythm="soft" intention="explain"><SectionTitle eyebrow="Insights" title="بینش‌های مدیریتی" description="مطالب آرام، دقیق و کوتاه برای تصمیم‌های بهتر." /><div className="grid gap-7 md:grid-cols-[1.2fr_.9fr_.9fr]">{insights.map(([t, s], index) => <InsightCard key={t} title={t} summary={s} featured={index === 0} />)}</div></Section>;
}

export function CaseStudiesSection() {
  return <Section tone="soft" rhythm="context" intention="prove"><SectionTitle eyebrow="Evidence" title="مطالعات موردی" description="روایت‌های خلاصه از مسئله، رویکرد و نتیجه." /><div className="grid gap-7 md:grid-cols-3">{cases.map(([a, b, c, d], index) => <CaseStudyCard key={a} category={a} challenge={b} approach={c} outcome={d} featured={index === 0} />)}</div></Section>;
}

export function DeliverablesSection() {
  return <Section tone="tint" rhythm="context" intention="conclude"><SectionTitle title="خروجی‌های قابل استفاده" description="هر همکاری باید به زبان تصمیم، اجرا و پیگیری ترجمه شود." /><div className="grid gap-6 md:grid-cols-[1fr_1.1fr_1fr]">{['تصویر تشخیصی', 'نقشه اولویت', 'ریتم پیگیری'].map((x, index) => <DeliverableCard key={x} title={x} description="خروجی روشن، قابل ارائه و قابل پیگیری برای تیم مدیریت." emphasis={index === 1 ? 'high' : 'normal'} />)}</div></Section>;
}

export function FAQSection() {
  return <Section tone="white" rhythm="dense" intention="compare"><SectionTitle title="پرسش‌های رایج" /><div className="grid gap-4">{faqs.map(([q, a]) => <details key={q} className="rounded-2xl border border-border p-6"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-4 text-text-secondary">{a}</p></details>)}</div></Section>;
}

export function StatsSection() {
  return <Section tone="dark" rhythm="dense" intention="orient"><div className="grid gap-6 md:grid-cols-[1.2fr_.9fr_.9fr]"><StatCard value="۵" label="بعد ارزیابی مدیریتی" /><StatCard value="۶" label="مرحله همکاری" /><StatCard value="۳" label="خروجی اجرایی اصلی" /></div></Section>;
}

export function AssessmentSection() {
  return <Section tone="white" rhythm="anchor" intention="compare"><div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]"><AssessmentDiagram /><SectionTitle title="ابعاد ارزیابی مدیریتی" description="چکاپ ابعاد مالی، عملیاتی، تجربه، تیم و رشد را همزمان می‌بیند تا مسئله واقعی گم نشود." /></div></Section>;
}

export function OpportunityMapSection() {
  return <Section tone="white" rhythm="anchor" intention="orient"><OpportunityDiagram /></Section>;
}

export function ValuesSection() {
  return <Section tone="warm" rhythm="soft" intention="orient"><SectionTitle title="ارزش‌ها و اصول کاری" /><div className="grid gap-6 md:grid-cols-4">{['دقت', 'شفافیت', 'احترام به زمینه', 'پیگیری'].map((x, index) => <ValueCard key={x} title={x} description="اصل رفتاری ثابت در همکاری‌های چکاپ." emphasis={index === 2 ? 'high' : 'normal'} />)}</div></Section>;
}

export function PrinciplesSection() {
  return <Section tone="white" rhythm="context" intention="explain"><SectionTitle title="اصول اجرایی مدیرانه" /><div className="grid gap-6 md:grid-cols-[1.1fr_.95fr_.95fr]">{['تصمیم بر اساس شواهد', 'کمک بدون جایگزینی تیم', 'ساده‌سازی بدون سطحی‌سازی'].map((x, index) => <PrincipleCard key={x} title={x} description="اصل راهنما برای کیفیت تصمیم و اجرا." emphasis={index === 0 ? 'high' : 'normal'} />)}</div></Section>;
}

export function ContactSection() {
  return <Section tone="soft" rhythm="resolution" intention="conclude"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><div className="grid content-start gap-4"><ContactCard title="جلسه آشنایی" text="۳۰ تا ۴۵ دقیقه" /><ContactCard title="روش برگزاری" text="آنلاین یا حضوری در تهران" /></div><form className="grid gap-4 rounded-3xl bg-white p-8 shadow-large ring-1 ring-border"><input className="rounded-xl border border-border p-4" placeholder="نام و نام خانوادگی" /><input className="rounded-xl border border-border p-4" placeholder="نام سازمان" /><input className="rounded-xl border border-border p-4" placeholder="موبایل" /><textarea className="min-h-[140px] rounded-xl border border-border p-4" placeholder="پیام" /><Button type="submit">ارسال درخواست</Button></form></div></Section>;
}

export function CTASection() {
  return <Section tone="dark" rhythm="resolution" intention="conclude"><div className="mx-auto max-w-3xl text-center"><h2 className="text-3xl font-black">{cta.title}</h2><p className="mt-5 text-white/75">{cta.text}</p><Button href="/contact" className="mt-8 bg-white text-primary hover:bg-primary-soft">درخواست جلسه</Button></div></Section>;
}
