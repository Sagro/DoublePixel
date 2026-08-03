import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    
    const variants = {
      primary: "bg-[#C6FF00] text-[#0a0a0a] hover:bg-[#b3e600]",
      secondary: "bg-zinc-800 text-zinc-50 hover:bg-zinc-700",
      outline: "border border-zinc-700 bg-transparent hover:bg-zinc-800 text-zinc-100",
      ghost: "hover:bg-zinc-800 hover:text-zinc-50 text-zinc-300"
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 rounded-md px-3 text-sm",
      lg: "h-14 px-8 text-lg"
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-zinc-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF00] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
