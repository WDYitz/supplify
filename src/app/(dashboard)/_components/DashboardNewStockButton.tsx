import { PlusIcon } from "lucide-react"
import { Button } from "../../../components/ui/button"

export const AddNewStockButton = () => {
  return (
    <Button variant="outline" className="border-dashed border-[1px] w-[300px] h-[300px]">
      <PlusIcon />
    </Button>
  )
}