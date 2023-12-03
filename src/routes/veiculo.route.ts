import { Router } from "express";
import { VeiculoCreateSchema } from "../schemas/veiculo.schema";
import { FindVeiculosByCpf, createVeiculo } from "../repositories/veiculo.repository";

const router = Router();

router.post("/api/veiculo/", async (req, res) => {
  // Validade
  const { placa, marca, ano, cor, modelo, cpf } = VeiculoCreateSchema.parse(req.body);
  // Execute
  const veiculo = await createVeiculo(placa, marca, ano, cor, modelo, cpf);
  // Send
  return res.status(201).json(veiculo);
});

router.get("/api/veiculo/:cpf", async (req, res) => {
  // Obtenha o valor do parâmetro de URL (cpf)
  const cpf: string = req.params.cpf;

  // Execute
  const veiculos = await FindVeiculosByCpf(cpf);

  // Send
  return res.status(200).json(veiculos);
});

export default router;
