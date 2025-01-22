import { Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { useState } from "react";

export const FilterButton = () => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 1240;
  const [value, setValue] = useState([MIN_PRICE, MAX_PRICE]);

  const formatPrice = (price: number) => {
    return price === MAX_PRICE ? `R$ ${price.toLocaleString()}+` : `R$ ${price.toLocaleString()}`;
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="h-12 relative">
          <Filter className="text-[#1b1b1b9f]" size="18" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[300px] h-[300px]" aria-describedby="filter-dialog" aria-description="modal de filtragem de dados">
        <div className="flex flex-col gap-4">
          <DialogTitle>Filtragem de dados</DialogTitle>
          <Label className="tabular-nums">
            Valor Unitário
          </Label>
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-between w-full">
              <span>{formatPrice(value[0])}</span>
              <span>{formatPrice(value[1])}</span>
            </div>
            <Slider
              value={value}
              onValueChange={setValue}
              min={MIN_PRICE}
              max={MAX_PRICE}
              aria-label="Unit price range"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>

  )
}
export default FilterButton;