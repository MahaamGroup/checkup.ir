import { Button } from './Button';
export function EmptyState({title,description}:{title:string;description:string}){return <div className="rounded-3xl border border-border p-8 text-center"><h3 className="font-black">{title}</h3><p className="mt-3 text-text-secondary">{description}</p><Button className="mt-6" href="/contact">درخواست جلسه</Button></div>}
