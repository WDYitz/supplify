import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

export const NewStockButton = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(({ className, children, ...props }, ref) => {
  return (
    <Button variant="dashed" className={cn(``, className)} ref={ref} {...props} type="button">
      {children}
    </Button>
  )
})

NewStockButton.displayName = "NewStockButton"