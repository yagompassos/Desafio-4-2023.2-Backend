import { Router } from "express";
import { MultaCreateSchema } from "../schemas/multa.schema";
import { FindMultasByCpf, createMulta } from "../repositories/multa.repository";

const router = Router();

router.post("/api/multa/", async (req, res) => {
  // Validade
  const { valor, dataInfracao, pontosPenalidade, tipoInfracao, placa } = MultaCreateSchema.parse(req.body);
  // Execute
  const multa = await createMulta(valor, dataInfracao, pontosPenalidade, tipoInfracao, placa);
  // Send
  return res.status(201).json(multa);
});

router.get("/api/multa/:cpf", async (req, res) => {
  // Obtenha o valor do parâmetro de URL (cpf)
  const cpf: string = req.params.cpf;

  // Execute
  const multas = await FindMultasByCpf(cpf);

  // Send
  return res.status(200).json(multas);
});

export default router;
