import { PlusIcon } from "lucide-react"
import { Button } from "../../../components/ui/button"

export const AddNewStockButton = () => {
  return (
    <Button variant="dashed" className="w-[300px] h-[300px]">
      <PlusIcon />
    </Button>
  )
}