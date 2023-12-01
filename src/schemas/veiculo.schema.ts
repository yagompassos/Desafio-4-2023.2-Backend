import { z } from "zod";

export const VeiculoSchema = z.object({
  placa: z.string().length(8),
  marca: z.string().length(50),
  ano: z.number().gt(1900).lt(2100),
  cor: z.string().length(50),
  modelo: z.string().length(50),
  cpf: z.number().int().positive(),
});

export const VeiculoCreateSchema = z.object({
  placa: z.string().length(8),
  marca: z.string().length(50),
  ano: z.number().gt(1900).lt(2100),
  cor: z.string().length(50),
  modelo: z.string().length(50),
  cpf: z.number().int().positive(),
});

export type Veiculo = z.infer<typeof VeiculoSchema>;
