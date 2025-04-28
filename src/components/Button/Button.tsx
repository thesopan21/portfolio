import * as React from "react"


interface VariantProps {}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className,asChild = false, ...props }, ref) => {
    const Comp = asChild ? null : "button"
    if (!Comp) {
      return null
    }

    return (
      <Comp
        className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }