import {Bacara} from "./Bacara";
import {Ruleta}from "./Ruleta";

export class Juegos {

    private nombre:string;
    private direccion:string;
    
    public constructor (nombre:string, direccion:string) {
    this.nombre= nombre
    this.direccion= direccion;

}

public getInf(): Juegos {
    return this;
} 
}                                                                                                                                                                                                                                                                                                                                                                                                                                      