import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, ElementType, forwardRef, ReactNode } from "react"

import { cn } from "@/lib/utils"
import { LoadingSpinner } from "@/components/icons/loading-spinner"
import { Slot } from "@radix-ui/react-slot"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all active:scale-95 ease-in-out duration-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  text?: ReactNode | string;
  loading?: boolean;
  DefaultIcon?: ElementType
  HoverIcon?: ElementType
  shortcut?: string;
  disabledTooltip?: string | ReactNode;
  textWrapperClassName?: string;
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      loading,
      DefaultIcon,
      HoverIcon,
      className,
      variant = "default",
      size,
      asChild = false,
      textWrapperClassName,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        // if onClick is passed, it's a "button" type, otherwise it's being used in a form, hence "submit"
        type={props.onClick ? "button" : "submit"}
        className={cn(
          "group flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 text-sm",
          buttonVariants({ variant, size, className }),
          props.disabled || loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 outline-none"
            : buttonVariants({ variant }),
          className,
        )}
        disabled={props.disabled || loading}
        {...props}
      >
        {loading ? <LoadingSpinner /> : null}
        <div className="group cursor-pointer">
          {DefaultIcon ? <DefaultIcon className="block group-hover:hidden h-6 w-6 text-gray-500" /> : null}
          {HoverIcon ? <HoverIcon className="hidden group-hover:block h-6 w-6 text-gray-700" /> : null}
        </div>
        {text && <div className={cn("min-w-0 truncate", textWrapperClassName)}>{text}</div>}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
