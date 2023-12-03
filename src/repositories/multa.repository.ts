import { mysqlConn } from "../base/mysql";
import { type Multa, MultaSchema, MultaCreateSchema, RetidosSchema } from "../schemas/multa.schema";

export async function findMultaById(idMulta: number) {
  const result = await mysqlConn.query(
    "SELECT valor, dataInfracao, pontosPenalidade, tipoInfracao, placa FROM MULTA WHERE idMulta = ?",
    idMulta,
  );

  return MultaSchema.parse(result[0]);
}

export async function FindMultasByCpf(cpf: string) {
  const result = await mysqlConn.query(
    "SELECT MULTA.valor, MULTA.dataInfracao, MULTA.pontosPenalidade, MULTA.tipoInfacao FROM MOTORISTA JOIN VEICULO ON MOTORISTA.cpf = VEICULO.cpf JOIN MULTA ON VEICULO.placa = MULTA.placa WHERE MOTORISTA.cpf = ?",
    cpf,
  );

  return MultaSchema.array().parse(result);
}

export async function FindRetidos() {
  const result = await mysqlConn.query(
    "SELECT MOTORISTA.nome, SUM(MULTA.pontosPenalidade) AS totalPontos FROM MOTORISTA JOIN VEICULO ON MOTORISTA.cpf = VEICULO.cpf JOIN MULTA ON VEICULO.placa = MULTA.placa GROUP BY MOTORISTA.nome HAVING totalPontos >= 10;",
  );

  return RetidosSchema.array().parse(result);
}

export async function createMulta(
  valor: number,
  dataInfracao: string,
  pontosPenalidade: number,
  tipoInfracao: string,
  placa: string,
): Promise<Multa> {
  const insertedResult = await mysqlConn.execute("INSERT INTO MULTA VALUES (?, ?, ?, ?, ?)", [
    valor,
    dataInfracao,
    pontosPenalidade,
    tipoInfracao,
    placa,
  ]);

  const selectedResult = await findMultaById(insertedResult.insertId);

  if (selectedResult === null) throw new Error("Erro ao criar Multa");

  return MultaCreateSchema.parse(selectedResult);
}
