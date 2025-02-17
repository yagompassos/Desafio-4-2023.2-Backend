import { z } from "zod";

export const MultaSchema = z.object({
  valor: z.number().positive(),
  dataInfracao: z.string().length(10),
  pontosPenalidade: z.number().int().positive().lt(40),
  tipoInfracao: z.string().length(50),
});

export const RetidosSchema = z.object({
  nome: z.string().max(60),
  pontosPenalidade: z.number().int().positive().lt(100),
});

export const MultaCreateSchema = z.object({
  idMulta: z.number().int().positive(),
  valor: z.number().positive(),
  dataInfracao: z.string().length(10),
  pontosPenalidade: z.number().int().positive().lt(40),
  tipoInfracao: z.string().length(50),
  placa: z.string().length(8),
});
export type Multa = z.infer<typeof MultaCreateSchema>;
