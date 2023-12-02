import { type Express } from "express";
import motoristaRouter from "./routes/motorista.route";
import veiculoRouter from "./routes/veiculo.route";
import multaRouter from "./routes/multa.route";

export default function routing(app: Express) {
  // ! Include your routes here !
  app.use("/motorista", motoristaRouter);
  app.use("/veiculo", veiculoRouter);
  app.use("/multa", multaRouter);
}
