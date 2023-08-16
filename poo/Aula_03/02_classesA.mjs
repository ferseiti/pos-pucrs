export class Carro{
    #_tanque;
    #_capacidadeDoTanque;
    constructor(valor){
        this.#_tanque = 0;
        this.#_capacidadeDoTanque = valor;
    }
    get tanque(){
        return this.#_tanque;
    }
    get capacidade(){
        return this.#_capacidadeDoTanque;
    }
    set tanque(quantidade){
        if(quantidade >= 0)
            if(quantidade + this.#_tanque > this.#_capacidadeDoTanque)
                this.#_tanque = this.#_capacidadeDoTanque;
            else
                this.#_tanque += quantidade;
    }
}