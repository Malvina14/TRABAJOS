import { Juegos } from "./Juegos";

export class Ruleta extends Juegos{ 
    
    private ficha: number;

    public constructor (nombre:string, direccion : string, ficha: number){
    super ( nombre, direccion)
    this.ficha=0
    }
    public getInf () : Ruleta {
        return this;
    }

}                                                                                               