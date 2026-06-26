export function Input(props:React.InputHTMLAttributes<HTMLInputElement>){return <input {...props} className={`focus-ring h-12 rounded-xl border border-border px-4 ${props.className??''}`} />}
