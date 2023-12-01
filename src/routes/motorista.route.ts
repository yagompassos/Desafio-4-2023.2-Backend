import { Router } from "express";
import { createMotorista, findAllMotoristas } from "../repositories/motorista.repository";
import { MotoristaCreateSquema } from "../schemas/motorista.schema";

const router = Router();

router.get("/api/motorista/", async (req, res) => {
  // Validade
  // Execute
  const motoristas = await findAllMotoristas();
  // Send
  return res.status(200).json(motoristas);
});

router.post("/api/motorista/", async (req, res) => {
  // Validade
  const { cpf, vencimentoCnh, nome, categoriaCnh } = MotoristaCreateSquema.parse(req.body);
  // Execute
  const motorista = await createMotorista(cpf, vencimentoCnh, nome, categoriaCnh);
  // Send
  return res.status(201).json(motorista);
});

export default router;
