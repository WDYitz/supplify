import { Filter } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Slider } from "./ui/slider";

export const FilterButton = () => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 1240;
  const MIN_QTD = 0;
  const MAX_QTD = 250;
  const [unitValue, setUnitValue] = useState([MIN_PRICE, MAX_PRICE]);
  const [qtdValue, setQtdValue] = useState([MIN_QTD, MAX_QTD]);

  const formatPrice = (price: number) => {
    return price === MAX_PRICE ? `R$ ${price.toLocaleString()}+` : `R$ ${price.toLocaleString()}`;
  };

  return (
    <Sheet modal>
      <SheetTrigger asChild>
        <Button variant="secondary" className="h-12 relative">
          <Filter className="text-[#1b1b1b9f]" size="18" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] h-[100%]" aria-describedby="filter-dialog" aria-description="modal de filtragem de dados" side="left">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4">
            <DialogTitle>Filtragem de produtos</DialogTitle>
            <Accordion type="single" collapsible>
              <AccordionItem value="input-range-price">
                <AccordionTrigger>
                  <Label className="tabular-nums">
                    Valor Unitário
                  </Label>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-between w-full">
                      <span>{formatPrice(unitValue[0])}</span>
                      <span>{formatPrice(unitValue[1])}</span>
                    </div>
                    <Slider
                      value={unitValue}
                      onValueChange={setUnitValue}
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      aria-label="Unit price range"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="multiple" >
              <AccordionItem value="input-range-price">
                <AccordionTrigger>
                  <Label className="tabular-nums">
                    Quantidade
                  </Label>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-between w-full">
                      <span>{qtdValue[0]}</span>
                      <span>{qtdValue[1]}</span>
                    </div>
                    <Slider
                      max={MAX_QTD}
                      step={1}
                      onValueChange={setQtdValue}
                      value={qtdValue}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Button variant="default" className="w-full bg-indigo-500">
            Aplicar
          </Button>
        </div>
      </SheetContent>
    </Sheet>

  )
}
export default FilterButton;