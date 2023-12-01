import { mysqlConn } from "../base/mysql";
import { VeiculoSchema, type Veiculo } from "../schemas/veiculo.schema";

export async function FindVeiculoByPlaca(placa: string) {
  const result = await mysqlConn.query(
    "SELECT placa, marca, ano, cor, modelo, cpf FROM VEICULO WHERE placa = ?",
    { placa },
  );

  return VeiculoSchema.parse(result[0]);
}

export async function createVeiculo(
  placa: string,
  marca: string,
  ano: number,
  cor: string,
  modelo: string,
  cpf: number,
): Promise<Veiculo> {
  const insertedResult = await mysqlConn.execute("INSERT INTO VEICULO VALUES (?, ?, ?, ?, ?, ?)", [
    placa,
    marca,
    ano,
    cor,
    modelo,
    cpf,
  ]);

  const selectedResult = await FindVeiculoByPlaca(insertedResult.insertId.toString());

  if (selectedResult === null) throw new Error("Erro ao criar veiculo");

  return VeiculoSchema.parse(selectedResult);
}
