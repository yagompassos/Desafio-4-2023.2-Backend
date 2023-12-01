import { z } from "zod";

export const veiculoRouter = z.object({
    placa: z.string().length(8),
    marca: VARCHAR(50) NOT NULL,
    ano: NUMERIC(4) NOT NULL,
    cor: VARCHAR(50) NOT NULL,
    modelo: VARCHAR(50) NOT NULL,
    cpf: NUMERIC(11) NOT NULL,
});
