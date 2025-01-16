import { z } from "zod";

export const AddNewStockTagSchema = z.object({
  name: z.string()
    .min(3, { message: "Nome da tag deve ter no minimo 3 caracteres" })
    .max(20, { message: "Nome da tag deve ter no maximo 20 caracteres" }),
})