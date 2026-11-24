import { PulserasRepository } from '../domain/PulserasRepository';
import { Pulsera, PulserasResponse } from '../domain/pulsera';
import consume from "./consumo.json"

export class PulserasRepositoryImpl implements PulserasRepository {

  async getPulseras(cedula: string): Promise<Pulsera[]> {

    const data = consume as PulserasResponse;

    const resultado = data.cedulas.find(
      (item) => item.cedula === cedula
    );

    if (!resultado) {
      return [];
    }

    return resultado.pulseras;
  }
}