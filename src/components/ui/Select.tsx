import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-12 w-full appearance-none rounded-none border-b border-zinc-700 bg-transparent px-0 py-2 text-base ring-offset-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:border-[#C6FF00] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          "[&>option]:bg-zinc-900 [&>option]:text-white text-white",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    )
  }
)
Select.displayName = "Select"

export { Select }
