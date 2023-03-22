import { Juegos } from "./Juegos";

export class Casino {
private Juegos:Juegos[]=[]
private nombre: string
private direccion: string

public constructor (nombre:string, direccion: string) {
    this.nombre= nombre;
    this.direccion= direccion
    this.Juegos=[]

} 

public getInf(): Casino {
    console.log (this)
    return this
    
}

public setCasinoJeux( Jeux :Juegos) {
    this.Juegos.push(Jeux);
}
}