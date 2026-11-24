export interface PulseraItem {
  producto: string;
  cantidad: number;
  precio: number;
}

export type EstadoPulsera = 'ACTIVA' | 'PAGADA';

export interface Pulsera {
  id: string;
  local: string;
  estado: EstadoPulsera;
  total: number;
  items: PulseraItem[];
}

export interface CedulaPulseras {
  cedula: string;
  pulseras: Pulsera[];
}

export interface PulserasResponse {
  cedulas: CedulaPulseras[];
}