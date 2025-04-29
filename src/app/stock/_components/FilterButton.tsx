"use client"
import { useFilter } from "@/hooks/useFilter";
import { initialFilterState } from "@/reducers/filterReducer";
import { Filter } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { DialogTitle } from "../../../components/ui/dialog";
import { Label } from "../../../components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet";
import { Slider } from "../../../components/ui/slider";

///// Refactor to useReducer for better readability !!!!!

export const FilterButton = () => {
  const { state, handleQtdValueChange, handleSearch } = useFilter();

  const formatPrice = (price: number) => {
    return price === initialFilterState.max_price ? `R$ ${price.toLocaleString()}+` : `R$ ${price.toLocaleString()}`;
  };

  const handlePriceValueChange = (value: number[]) => { }

  const handleQtdChange = (value: number[]) => {
    const [min, max] = value;
    handleQtdValueChange([min, max]);
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
                  value={[state.min_price, state.max_price]}
                  onValueChange={handlePriceValueChange}
                  min={state.min_price}
                  max={state.max_price}
                  aria-label="Unit price range"
                />
                <div className="flex justify-between w-full">
                  <span>{formatPrice(state.min_price)}</span>
                  <span>{formatPrice(state.max_price)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Label className="tabular-nums text-md">
                Quantidade
              </Label>
              <div className="flex flex-col items-center gap-4">
                <Slider
                  max={state.max_qtd}
                  min={state.min_qtd}
                  onValueChange={handleQtdChange}
                  value={[state.min_qtd, state.max_qtd]}
                />
                <div className="flex justify-between w-full">
                  <span>{state.min_qtd}</span>
                  <span>{state.max_qtd}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-4">
                <Label className="tabular-nums text-md">
                  Classificação
                </Label>
                <div className="flex items-center gap-4">
                  <Checkbox id="classificationA" checked={state.classification.A} onClick={() => { }} />
                  <Label className="tabular-nums text-md hover:cursor-pointer" htmlFor="classificationA">
                    A
                  </Label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="classificationB" checked={state.classification.B} onClick={() => { }} />
                  <Label className="tabular-nums text-md hover:cursor-pointer" htmlFor="classificationB">
                    B
                  </Label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="classificationC" checked={state.classification.C} onClick={() => { }} />
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