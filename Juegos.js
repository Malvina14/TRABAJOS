"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juegos = void 0;
var Juegos = /** @class */ (function () {
    function Juegos(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
    Juegos.prototype.getInf = function () {
        return this;
    };
    return Juegos;
}());
exports.Juegos = Juegos;
