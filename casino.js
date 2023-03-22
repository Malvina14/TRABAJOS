"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(nombre, direccion) {
        this.Juegos = [];
        this.nombre = nombre;
        this.direccion = direccion;
        this.Juegos = [];
    }
    Casino.prototype.getInf = function () {
        console.log(this);
        return this;
    };
    Casino.prototype.setCasinoJeux = function (Jeux) {
        this.Juegos.push(Jeux);
    };
    return Casino;
}());
exports.Casino = Casino;
