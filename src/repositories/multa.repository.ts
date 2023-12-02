import { mysqlConn } from "../base/mysql";
import { type Multa, MultaSquema } from "../schemas/multa.schema";

export async function findMultaById(idMulta: number) {
  const result = await mysqlConn.query(
    "SELECT valor, dataInfracao, pontosPenalidade, tipoInfracao, placa FROM MULTA WHERE idMulta = ?",
    { idMulta },
  );

  return MultaSquema.parse(result[0]);
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

  return MultaSquema.parse(selectedResult);
}
