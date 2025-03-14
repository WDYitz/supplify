import { z } from 'zod';

const brazilianMoneyRegex = /^R?\$?\s?\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/;

export const addNewProductSchema = z.object({
  product: z.string({
    required_error: "Nome do produto é obrigatório",
  }).min(3, { message: "Nome do produto deve ter no minimo 3 caracteres" })
    .max(80, { message: "Nome do produto deve ter no maximo 80 caracteres" }),
  quantity: z.number({
    required_error: "Quantidade é obrigatória",
    message: "A Quantidade deve ser um numero",
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
    message: "Código de barras deve ser um numero",
  }).min(7, { message: "Código de barras deve ter no minimo 7 caracteres" }),
  unitPrice: z.number({
    required_error: "Preço unitário é obrigatório",
    message: "Preço unitário deve ser um numero",
  }).min(1, { message: "Preço unitário deve ser maior que 1" }).refine((value) => brazilianMoneyRegex.test(value.toString()), { message: "Preço unitário deve ser um valor monetário" }),
  classification: z.enum(["A", "B", "C"], {
    required_error: "Classificação é obrigatória",
  }),
})