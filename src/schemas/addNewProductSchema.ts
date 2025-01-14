import { z } from 'zod';

export const addNewProductSchema = z.object({
  product: z.string().min(3, { message: "Nome do produto deve ter no minimo 3 caracteres" })
    .max(80, { message: "Nome do produto deve ter no maximo 80 caracteres" }),
  quantity: z.number().int().min(1, { message: "Quantidade deve ser maior que 0" }),
  tags: z.string(),
  expirationDate: z.date()
    .min(new Date(), { message: "Data de validade deve ser maior que a data atual" }),
  productCode: z.string()
    .min(7, { message: "Código do produto deve ter no minimo 7 caracteres" }),
  barCode: z.number().min(7, { message: "Código de barras deve ter no minimo 7 caracteres" }),
  unitPrice: z.number().min(1, { message: "Preço unitário deve ser maior que 1" }),
  classification: z.enum(["A", "B", "C"]),
})