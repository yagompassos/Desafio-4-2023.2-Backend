import { type Express } from "express";
import motoristaRouter from "./routes/motorista.route";
import veiculoRouter from "./routes/veiculo.route";

export default function routing(app: Express) {
  // ! Include your routes here !
  app.use("/motorista", motoristaRouter);
  app.use("/veiculo", veiculoRouter);
}
