export interface Coordenada{
  latitud:number;
  longitud:number;
}

// herencia de interfaces
export interface CoordenadaConMensaje extends Coordenada{
  mensaje:string;
}
