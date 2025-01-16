import { z } from "zod";

export const AddNewStockTagSchema = z.object({
  name: z.string()
    .min(3, { message: "A Tag deve ter no minimo 3 caracteres" })
    .max(20, { message: "A tag deve ter no maximo 28 caracteres" }),
})