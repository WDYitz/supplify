import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { formatCurrency } from "@/lib/utils"
import type { Product } from "@prisma/client"
import { SearchIcon } from "lucide-react"

interface ProductsDetailsProps {
  data: Product
}

export const ProductsDetails = ({ data }: ProductsDetailsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <SearchIcon size="15" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle className="font-medium text-lg">Código Produto: {data.productCode}</DialogTitle>
          <DialogDescription>Detalhes do produto</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <ProductRowsDetails data={data} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

const ProductRowsDetails = ({ data }: ProductsDetailsProps) => {
  return (
    <>
      <div className="flex justify-between border-[#e5e7eb1e] border-b-[0.5px] pb-3">
        <span className="font-light">ID</span>
        <span>{data.id}</span>
      </div>
      <div className="flex justify-between border-[#e5e7eb1e] border-b-[0.5px] pb-3">
        <span className="font-light">Código de barra</span>
        <span>{data.barcode}</span>
      </div>
      <div className="flex justify-between border-[#e5e7eb1e] border-b-[0.5px] pb-3">
        <span className="font-light">Classificação</span>
        <span>{data.classification}</span>
      </div>
      <div className="flex justify-between border-[#e5e7eb1e] border-b-[0.5px] pb-3">
        <span className="font-light">Tag</span>
        <span>{data.tag}</span>
      </div>
      <div className="flex justify-between border-[#e5e7eb1e] border-b-[0.5px] pb-3">
        <span className="font-light">Adicionado há</span>
        <span>{new Date(data.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="flex justify-between border-[#e5e7eb1e] border-b-[0.5px] pb-3">
        <span className="font-light">Validade</span>
        <span>{new Date(data.expirationDate).toLocaleDateString()}</span>
      </div>

      <div className="flex flex-col py-3 mt-6">
        <div className="flex justify-between items-center border-[#e5e7eb1e] border-b-[0.4px] pb-3">
          <span className="font-light">Produto</span>
          <span className="font-light">Qtd</span>
          <span className="font-light">Valor Unitario</span>
          <span className="font-light">Subtotal</span>
        </div>
        <div className="flex justify-between items-center pt-3">
          <span>{data.name}</span>
          <span>{data.qtyInStock}</span>
          <span>{formatCurrency(Number(data.unitPrice))}</span>
          <span>{formatCurrency(data.qtyInStock * Number(data.unitPrice))}</span>
        </div>
      </div>
      <div className="flex justify-between bg-neutral-800 p-2 rounded-md">
        <span className="font-bold">Total</span>
        <span>{formatCurrency(data.qtyInStock * Number(data.unitPrice))}</span>
      </div>
    </>
  )
}