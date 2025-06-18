import { ProductsForm } from "@/components/Forms/Products";
import { BoxesIcon } from "lucide-react";

const ProductDoesNotExist = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full border-2 border-input bg-transparent shadow-sm shadow-black/5 border-dashed rounded-lg space-y-6">
      <BoxesIcon size={55} />
      <span className="text-slate-400 text-2xl">
        Parece que você ainda não
        possui nenhum produto cadastrado.
      </span>
      <ProductsForm />
    </div>
  );
}

export default ProductDoesNotExist;