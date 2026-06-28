import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

type HeroTone = 'expansive' | 'structural' | 'minimal' | 'editorial' | 'map' | 'evidence' | 'human' | 'process';

const toneStyles: Record<HeroTone, { section: string; grid: string; anchor: string; eyebrow: string; note: string }> = {
  expansive: {
    section: 'soft-grid bg-gradient-to-br from-white via-white to-primary-soft',
    grid: 'lg:grid-cols-[1.05fr_.95fr]',
    anchor: 'rotate-0',
    eyebrow: 'Orientation · confidence',
    note: 'یک تصویر مدیریتی روشن برای شروع تصمیم‌گیری.',
  },
  structural: {
    section: 'bg-[#F7FAFA]',
    grid: 'lg:grid-cols-[.95fr_1.05fr]',
    anchor: '-rotate-1',
    eyebrow: 'Control · structure',
    note: 'چارچوبی برای دیدن الگو، نه فقط نشانه‌ها.',
  },
  minimal: {
    section: 'bg-white',
    grid: 'lg:grid-cols-[1.2fr_.8fr]',
    anchor: 'scale-90 opacity-80',
    eyebrow: 'Simplicity · closure',
    note: 'کمترین اصطکاک برای یک گفت‌وگوی روشن.',
  },
  editorial: {
    section: 'bg-[#FBFAF6]',
    grid: 'lg:grid-cols-[1.15fr_.85fr]',
    anchor: 'rotate-1',
    eyebrow: 'Intelligence · depth',
    note: 'فضای خواندن آرام برای تصمیم‌های پیچیده.',
  },
  map: {
    section: 'soft-grid bg-[#F4FAF8]',
    grid: 'lg:grid-cols-[.9fr_1.1fr]',
    anchor: 'rotate-2',
    eyebrow: 'Exploration · curiosity',
    note: 'فرصت‌ها به شکل نقشه دیده می‌شوند، نه فهرست.',
  },
  evidence: {
    section: 'bg-gradient-to-br from-white to-[#F7F4EE]',
    grid: 'lg:grid-cols-[1fr_1fr]',
    anchor: '-rotate-1',
    eyebrow: 'Trust · evidence',
    note: 'از روایت مسئله تا نشانه‌های قابل اتکا.',
  },
  human: {
    section: 'bg-[#FCFBF8]',
    grid: 'lg:grid-cols-[1.1fr_.9fr]',
    anchor: 'rotate-1',
    eyebrow: 'Human presence',
    note: 'حضور انسانی، بدون فشار ساختاری اضافه.',
  },
  process: {
    section: 'bg-gradient-to-bl from-white to-primary-soft',
    grid: 'lg:grid-cols-[.95fr_1.05fr]',
    anchor: 'rotate-0',
    eyebrow: 'Clarity of movement',
    note: 'حرکت مرحله‌به‌مرحله با مقصد قابل فهم.',
  },
};

export function Hero({ title, subtitle, tone = 'expansive' }: { title: string; subtitle: string; tone?: HeroTone }) {
  const style = toneStyles[tone];
  return (
    <section className={`${style.section} pt-28 md:pt-36`}>
      <Container>
        <div className={`grid min-h-[640px] items-center gap-12 py-16 ${style.grid}`}>
          <div>
            <p className="mb-5 font-bold text-primary">CHECKUP · {style.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.25] tracking-tight md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-text-secondary">{subtitle}</p>
            <p className="mt-7 max-w-xl border-r-4 border-primary/30 pr-5 leading-8 text-text-secondary">{style.note}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">درخواست جلسه آشنایی</Button>
              <Button href="/why-checkup" variant="secondary">آشنایی با چکاپ</Button>
            </div>
          </div>
          <div className={`hero-anchor rounded-[32px] bg-white/85 p-7 shadow-large ring-1 ring-border ${style.anchor}`}>
            <div className="grid gap-4">
              <div className="relative h-36 overflow-hidden rounded-3xl bg-primary">
                <span className="absolute right-6 top-6 h-16 w-16 rounded-full bg-white/18" />
                <span className="absolute bottom-6 left-6 h-3 w-40 rounded-full bg-white/30" />
              </div>
              <div className="grid grid-cols-[1.2fr_.8fr_1fr] gap-4">
                <div className="h-28 rounded-3xl bg-primary-soft" />
                <div className="h-28 rounded-3xl bg-surface-soft" />
                <div className="h-28 rounded-3xl bg-[#D8EBE7]" />
              </div>
              <div className="mr-auto h-4 w-2/3 rounded-full bg-border" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CompactHero({ title, subtitle }: { title: string; subtitle: string }) {
  return <section className="bg-surface-soft pt-32"><Container><div className="py-20"><h1 className="text-4xl font-black md:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-text-secondary">{subtitle}</p></div></Container></section>;
}

export function CenteredHero({ title, subtitle }: { title: string; subtitle: string }) {
  return <section className="pt-32 text-center"><Container><div className="mx-auto max-w-3xl py-24"><h1 className="text-5xl font-black">{title}</h1><p className="mt-5 text-lg text-text-secondary">{subtitle}</p><Button href="/" className="mt-8">بازگشت به خانه</Button></div></Container></section>;
}
