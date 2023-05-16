// CommonJS
module.exports = class Circulo {
    constructor(r) {
        this.raio = r;
    }
    area() {
        return Math.PI * this.raio * this.raio;
    }
    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
};

// The above is the same as:
// class Circulo {
//     constructor(r) {
//         this.raio = r;
//     }
//     area() {
//         return Math.PI * this.raio * this.raio;
//     }
//     circunferencia() {
//         return 2 * Math.PI * this.raio;
//     }
// };
// module.exports = Circulo