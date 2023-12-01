import { z } from "zod";

export const MotoristaSquema = z.object({
  cpf: z.number().int().positive(),
  vencimentoCnh: z.string().length(10),
  nome: z.string().max(60),
  categoriaCnh: z.enum(["A", "B", "AB"]),
});

export const MotoristaCreateSquema = z.object({
  cpf: z.number().int().positive(),
  vencimentoCnh: z.string().length(10),
  nome: z.string().max(60),
  categoriaCnh: z.enum(["A", "B", "AB"]),
});

export type Motorista = z.infer<typeof MotoristaSquema>;
