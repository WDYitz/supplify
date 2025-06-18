import { z } from "zod";

export const productFilterSchema = z.object({
  search: z.string().optional(),
  price: z.object({
    min: z
      .string()
      .regex(/^\d+$/, { message: "O valor deve ser um número" })
      .min(0, { message: "O valor mínimo não pode ser negativo" }),
    max: z
      .string({ message: "O Valor deve ser um número" })
      .min(0, { message: "O valor máximo não pode ser negativo" }),
  }),
  qtd: z.object({
    min: z
      .string({ message: "A quantidade mínima deve ser um numero" })
      .min(0, { message: "A quantidade mínima não pode ser negativa" }),
    max: z
      .string({ message: "A quantidade máxima deve ser um numero" })
      .min(0, { message: "A quantidade máxima não pode ser negativa" }),
  }),
  classification: z.object({
    A: z.boolean().default(false),
    B: z.boolean().default(false),
    C: z.boolean().default(false),
  }),
});
