// Recursive Fibonacci

function fibonacci(n) {
    // Caso base (Quando a recursão deve parar)
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 20; i++) {
    console.log(i + ": " + fibonacci(i));
}