import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export function MyButton({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-2xl text-xl p-2 text-slate-300 cursor-pointer",
        className,
      )}
    >
      {children}
    </button>
  );
}
