import { Router } from "express";

const router = Router();

router.post("/api/motorista/", async (req, res) => {
  // Validade
  const { cpf, vencimentoCnh, nome, categoriaCnh } = MotoristaCreateSquema.parse(req.body);
  // Execute
  const motorista = await createMotorista(cpf, vencimentoCnh, nome, categoriaCnh);
  // Send
  return res.status(201).json(motorista);
});

export default router;
