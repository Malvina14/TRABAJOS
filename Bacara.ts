import { Juegos } from "./Juegos";

export class Bacara extends Juegos{
private cantidadCartas: number ;

public constructor(nombre:string, direccion: string ,cantidadCartas:number){
    super(nombre,direccion)
    this.cantidadCartas
}

    public getInf() : Bacara {
    return this;
}
}