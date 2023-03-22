"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bacara = void 0;
var Juegos_1 = require("./Juegos");
var Bacara = /** @class */ (function (_super) {
    __extends(Bacara, _super);
    function Bacara(nombre, direccion, cantidadCartas) {
        var _this = _super.call(this, nombre, direccion) || this;
        _this.cantidadCartas;
        return _this;
    }
    Bacara.prototype.getInf = function () {
        return this;
    };
    return Bacara;
}(Juegos_1.Juegos));
exports.Bacara = Bacara;
