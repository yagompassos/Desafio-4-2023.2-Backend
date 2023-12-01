import { mysqlConn } from "../base/mysql";
import { motoristaSquema } from "../schemas/motorista.schema";

export async function findAllMotoristas() {
  const result = await mysqlConn.query("SELECT cpf, vencimentoCnh, nome, categoriaCnh FROM MOTORISTA");

  return motoristaSquema.array().parse(result);
}
