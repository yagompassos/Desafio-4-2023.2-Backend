import { mysqlConn } from "../base/mysql";
import { MotoristaSquema, type Motorista } from "../schemas/motorista.schema";

export async function findAllMotoristas() {
  const result = await mysqlConn.query("SELECT cpf, vencimentoCnh, nome, categoriaCnh FROM MOTORISTA");

  return MotoristaSquema.array().parse(result);
}

export async function findMotoristaByCpf(cpf: number) {
  const result = await mysqlConn.query(
    "SELECT cpf, vencimentoCnh, nome, categoriaCnh FROM MOTORISTA WHERE cpf = ?",
    { cpf },
  );

  return MotoristaSquema.parse(result[0]);
}

export async function createMotorista(
  cpf: number,
  vencimentoCnh: string,
  nome: string,
  categoriaCnh: string,
): Promise<Motorista> {
  const insertedResult = await mysqlConn.execute("INSERT INTO MOTORISTA VALUES (?,?,?,?)", [
    cpf,
    vencimentoCnh,
    nome,
    categoriaCnh,
  ]);

  const selectedResult = await findMotoristaByCpf(insertedResult.insertId);

  if (selectedResult === null) throw new Error("Erro ao criar motorista");

  return MotoristaSquema.parse(selectedResult);
}
