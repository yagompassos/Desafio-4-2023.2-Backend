import { type Express } from "express";
import motoristaRouter from "./routes/motorista.route";

export default function routing(app: Express) {
  // ! Include your routes here !
  app.use("/motorista", motoristaRouter);
}
