import { Pulsera } from "./cedula";

export interface PulserasRepository {
  getPulseras(cedula: string): Promise<Pulsera[]>;
}