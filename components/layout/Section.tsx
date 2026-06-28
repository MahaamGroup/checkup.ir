import { Container } from './Container';

type SectionTone = 'white' | 'soft' | 'tint' | 'dark' | 'warm';
type SectionRhythm = 'focus' | 'context' | 'anchor' | 'resolution' | 'dense' | 'soft';

type SectionProps = {
  children: React.ReactNode;
  tone?: SectionTone;
  rhythm?: SectionRhythm;
  intention?: 'explain' | 'guide' | 'prove' | 'orient' | 'compare' | 'conclude';
  className?: string;
  id?: string;
};

export function Section({ children, tone = 'white', rhythm = 'context', intention, className = '', id }: SectionProps) {
  const tones: Record<SectionTone, string> = {
    white: 'bg-white',
    soft: 'bg-surface-soft',
    tint: 'bg-surface-tint',
    warm: 'bg-[#FBFAF6]',
    dark: 'bg-[#132326] text-white',
  };
  const rhythms: Record<SectionRhythm, string> = {
    focus: 'py-24 md:py-32 lg:py-40',
    context: 'py-16 md:py-24 lg:py-[112px]',
    anchor: 'py-20 md:py-28 lg:py-36',
    resolution: 'py-18 md:py-24 lg:py-28',
    dense: 'py-14 md:py-18 lg:py-20',
    soft: 'py-20 md:py-28 lg:py-32',
  };

  return (
    <section id={id} data-intention={intention} className={`${tones[tone]} ${rhythms[rhythm]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
