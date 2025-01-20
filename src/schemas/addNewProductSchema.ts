import { z } from 'zod';

export const addNewProductSchema = z.object({
  product: z.string({
    required_error: "Nome do produto é obrigatório",
  }).min(3, { message: "Nome do produto deve ter no minimo 3 caracteres" })
    .max(80, { message: "Nome do produto deve ter no maximo 80 caracteres" }),
  quantity: z.number({
    required_error: "Quantidade é obrigatória",
  }).int().min(1, { message: "Quantidade deve ser maior que 0" }),
  tag: z.string({
    required_error: "Por favor selecione uma tag.",
  }),
  expirationDate: z.date({
    required_error: "Data de validade é obrigatória",
  })
    .min(new Date(), { message: "Data de validade deve ser maior que a data atual" }),
  productCode: z.string({
    required_error: "Código do produto é obrigatório",
  })
    .min(7, { message: "Código do produto deve ter no minimo 7 caracteres" }),
  barCode: z.number({
    required_error: "Código de barras é obrigatório",
  }).min(7, { message: "Código de barras deve ter no minimo 7 caracteres" }),
  unitPrice: z.number({
    required_error: "Preço unitário é obrigatório",
  }).min(1, { message: "Preço unitário deve ser maior que 1" }),
  classification: z.enum(["A", "B", "C"], {
    required_error: "Classificação é obrigatória",
  }),
})