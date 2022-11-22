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
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_nome, _cognome, _coderedd) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.coderedd = _coderedd;
    }
    return Lavoratore;
}());
var PayTax = /** @class */ (function (_super) {
    __extends(PayTax, _super);
    function PayTax(_nome, _cognome, _coderedd, _redditoproprio, _tasseInps, _tasseIrpef) {
        var _this = _super.call(this, _nome, _cognome, _coderedd) || this;
        _this.redditoproprio = _redditoproprio;
        _this.tasseInps = _tasseInps;
        _this.tasseIrpef = _tasseIrpef;
        return _this;
    }
    PayTax.prototype.getUtileTasse = function () {
        return (this.redditoproprio * this.coderedd / 100);
    };
    ;
    PayTax.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseInps / 100);
    };
    PayTax.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseIrpef / 100);
    };
    PayTax.prototype.getRedditoAnnuoNetto = function () {
        return (this.redditoproprio - (this.tasseInps + this.tasseIrpef));
    };
    return PayTax;
}(Lavoratore));
var artigiano = new PayTax('Claudio', 'Rossi', 77, 1000, 24, 456);
console.log(artigiano.getUtileTasse(), artigiano.getTasseInps(), artigiano.getTasseIrpef(), artigiano.getRedditoAnnuoNetto());
var professionista = new PayTax('Laura', 'Bianchi', 78, 2200, 25, 246);
console.log(professionista.getUtileTasse(), professionista.getTasseInps(), professionista.getTasseIrpef(), professionista.getRedditoAnnuoNetto());
