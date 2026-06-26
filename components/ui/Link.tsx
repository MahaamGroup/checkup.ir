import NextLink from 'next/link';
export function Link({href,children}:{href:string;children:React.ReactNode}){return <NextLink className="focus-ring text-primary hover:text-primary-hover" href={href}>{children}</NextLink>}
