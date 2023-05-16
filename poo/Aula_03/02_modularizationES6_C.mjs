// ES6
export class Circulo {
    constructor(r) {
        this.raio = r;
    }
    area() {
        return Math.PI * this.raio * this.raio;
    }
    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
}