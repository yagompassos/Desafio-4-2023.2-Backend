import { Router } from "express";
import { MultaCreateSchema } from "../schemas/multa.schema";
import { FindMultasByCpf, FindRetidos, createMulta } from "../repositories/multa.repository";

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
  const cpf: string = req.params.cpf;

  // Execute
  const multas = await FindMultasByCpf(cpf);

  // Send
  return res.status(200).json(multas);
});

router.get("/api/multa/retidos", async (req, res) => {
  // Execute
  const retidos = await FindRetidos();

  // Send
  return res.status(200).json(retidos);
});

export default router;
