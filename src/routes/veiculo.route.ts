import { Router } from "express";
import { VeiculoCreateSchema } from "../schemas/veiculo.schema";
import { createVeiculo } from "../repositories/veiculo.repository";

const router = Router();

router.post("/api/motorista/", async (req, res) => {
  // Validade
  const { placa, marca, ano, cor, modelo, cpf } = VeiculoCreateSchema.parse(req.body);
  // Execute
  const veiculo = await createVeiculo(placa, marca, ano, cor, modelo, cpf);
  // Send
  return res.status(201).json(veiculo);
});

export default router;
