import { z } from "zod";

export const MultaSquema = z.object({
  idMulta: z.number().int().positive(),
  valor: z.number().positive(),
  dataInfracao: z.string().length(10),
  pontosPenalidade: z.number().int().positive().lt(40),
  tipoInfracao: z.string().length(50),
  placa: z.string().length(8),
});

export const MultaCreateSchema = z.object({
  idMulta: z.number().int().positive(),
  valor: z.number().positive(),
  dataInfracao: z.string().length(10),
  pontosPenalidade: z.number().int().positive().lt(40),
  tipoInfracao: z.string().length(50),
  placa: z.string().length(8),
});
export type Multa = z.infer<typeof MultaSquema>;
