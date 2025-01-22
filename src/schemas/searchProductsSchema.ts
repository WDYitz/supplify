import { z } from "zod";

export const searchProductsSchema = z.object({
  search: z.string().optional(),
})