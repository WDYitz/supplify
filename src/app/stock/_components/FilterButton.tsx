"use client"
import { useFilter } from "@/hooks/useFilter";
import { Filter } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { DialogTitle } from "../../../components/ui/dialog";
import { Label } from "../../../components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet";
import { Slider } from "../../../components/ui/slider";
import { Checkbox } from "../../../components/ui/checkbox";

///// Refactor to useReducer for better readability !!!!!

export const FilterButton = () => {
  const {
    unitValue,
    setUnitValue,
    MIN_PRICE,
    MAX_PRICE,
    MAX_QTD,
    MIN_QTD,
    handleSearch,
    setQtdValue,
    qtdValue,
    classification,
    setClassification
  } = useFilter();

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
          <div className="space-y-8">
            <DialogTitle>Filtragem de produtos</DialogTitle>
            <div className="flex flex-col gap-4">
              <Label className="tabular-nums text-md">
                Valor Unitário
              </Label>
              <div className="flex flex-col items-center gap-4">
                <Slider
                  value={unitValue}
                  onValueChange={setUnitValue}
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  aria-label="Unit price range"
                />
                <div className="flex justify-between w-full">
                  <span>{formatPrice(unitValue[0])}</span>
                  <span>{formatPrice(unitValue[1])}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Label className="tabular-nums text-md">
                Quantidade
              </Label>
              <div className="flex flex-col items-center gap-4">
                <Slider
                  max={MAX_QTD}
                  min={MIN_QTD}
                  onValueChange={setQtdValue}
                  value={qtdValue}
                />
                <div className="flex justify-between w-full">
                  <span>{qtdValue[0]}</span>
                  <span>{qtdValue[1]}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-4">
                <Label className="tabular-nums text-md">
                  Classificação
                </Label>
                <div className="flex items-center gap-4">
                  <Checkbox id="classificationA" checked={classification.A} onClick={() => setClassification({ ...classification, A: !classification.A })} />
                  <Label className="tabular-nums text-md hover:cursor-pointer" htmlFor="classificationA">
                    A
                  </Label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="classificationB" checked={classification.B} onClick={() => setClassification({ ...classification, B: !classification.B })} />
                  <Label className="tabular-nums text-md hover:cursor-pointer" htmlFor="classificationB">
                    B
                  </Label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="classificationC" checked={classification.C} onClick={() => setClassification({ ...classification, C: !classification.C })} />
                  <Label className="tabular-nums text-md hover:cursor-pointer" htmlFor="classificationC">
                    C
                  </Label>
                </div>
                <div className="flex flex-col gap-2 py-2 text-xs">
                  <span>A - Baixo volume de consumo</span>
                  <span>B - Consumo Moderado</span>
                  <span>C - Alto volume de consumo</span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="default" className="w-full bg-indigo-500" onClick={handleSearch}>
            Aplicar
          </Button>
        </div>
      </SheetContent>
    </Sheet>

  )
}
export default FilterButton;