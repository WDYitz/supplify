import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StockButtonProps {
  className?: string
  icon?: React.ElementType,
  onClick?: () => void
}

export const NewStockButton = ({ className, icon: Icon, onClick }: StockButtonProps) => {
  return (
    <Button variant="dashed" className={cn(`w-[300px] h-[300px]`, className)} onClick={onClick}>
      {Icon ? <Icon /> : "Adicionar novo estoque"}
    </Button>
  )
}