import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[16px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-primary text-white hover:bg-[#0040A8] hover:shadow-cta",
        secondary:
          "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-[#EEF3FB]",
        ghost:
          "bg-transparent border-2 border-white text-white hover:bg-white/10",
        icon: 
          "bg-[#EEF3FB] text-brand-primary rounded-full hover:bg-brand-primary hover:text-white",
        outline:
          "border-2 border-current bg-transparent",
      },
      size: {
        default: "px-[32px] py-[14px] rounded-pill",
        lg: "h-[60px] px-[48px] text-[18px] rounded-pill",
        icon: "h-[48px] w-[48px] rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
