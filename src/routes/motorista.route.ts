import { Router } from "express";
import { findAllMotoristas } from "../repositories/motorista.repository";

const router = Router();

router.get("/", async (req, res) => {
  // Validade
  // Execute
  const motoristas = await findAllMotoristas();
  // Send
  return res.status(200).json(motoristas);
});

export default router;
