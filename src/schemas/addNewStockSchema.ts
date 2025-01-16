import { z } from 'zod';

export const addNewStockSchema = z.object({
  title: z.string().min(5, { message: "O título deve ter no mínimo 5 caracteres" }),
  description: z.string()
    .min(10, { message: "A descrição deve ter no mínimo 10 caracteres" })
    .max(255, { message: "A descrição deve ter no máximo 255 caracteres" }),
  tags: z.string().min(1, { message: "Deve ter no mínimo 1 tag" }),
});