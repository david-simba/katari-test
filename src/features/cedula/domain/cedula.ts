export interface Cedula {
  cedula: string;
  pulseras: Pulsera[];
}

export interface Pulsera {
  id: string;
  local: string;
  estado: EstadoPulsera;
  total: number;
  items: ItemPulsera[];
}

export interface ItemPulsera {
  producto: string;
  cantidad: number;
  precio: number;
}

export type EstadoPulsera = 'ACTIVA' | 'PAGADA';

export interface RegistroConsumos {
  cedulas: Cedula[];
}