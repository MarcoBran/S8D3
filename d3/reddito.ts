abstract class Lavoratore {
    nome: string;
    cognome: string;
    coderedd: number;
    constructor (_nome : string, _cognome : string, _coderedd : number){
    this.nome = _nome;
    this.cognome = _cognome;
    this.coderedd = _coderedd;
    }

}

class PayTax extends Lavoratore{
    redditoproprio : number;
    tasseInps : number;
    tasseIrpef : number;
    constructor(_nome : string, _cognome : string, _coderedd : number, _redditoproprio : number, _tasseInps : number, _tasseIrpef : number){
    super (_nome, _cognome, _coderedd)
    this.redditoproprio = _redditoproprio;
    this.tasseInps = _tasseInps;
    this.tasseIrpef = _tasseIrpef;
    }

    getUtileTasse():number{
        return (this.redditoproprio*this.coderedd/100)
    };

    getTasseInps():number{
        return (this.getUtileTasse()*this.tasseInps/100 )
    }

    getTasseIrpef():number{
        return(this.getUtileTasse()*this.tasseIrpef/ 100)
    }

    getRedditoAnnuoNetto():number{
        return(this.redditoproprio-(this.tasseInps+this.tasseIrpef))
    }
}

let artigiano = new PayTax('Claudio', 'Rossi', 77, 1000, 24, 456);
console.log(artigiano.getUtileTasse(), artigiano.getTasseInps(), artigiano.getTasseIrpef(), artigiano.getRedditoAnnuoNetto());

let professionista = new PayTax('Laura', 'Bianchi', 78, 2200, 25, 246);
console.log(professionista.getUtileTasse(), professionista.getTasseInps(), professionista.getTasseIrpef(), professionista.getRedditoAnnuoNetto());

