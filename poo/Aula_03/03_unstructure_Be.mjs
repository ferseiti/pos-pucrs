export class UmaClasse{
    #_umAtributo;
    outroAtributo = "Outro Atributo";
    constructor(a){
        this.#_umAtributo = a;
    }
    capturaPrimeiroAtributo(){
        return this.#_umAtributo;
    }
}