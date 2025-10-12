const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите целое неотрицательное число: ', (input) => {
    const n = Number(input);

    if (isNaN(n)) {
        console.log('Ошибка: введено не число.');
    } else if (!Number.isInteger(n)) {
        console.log('Ошибка: число должно быть целым.');
    } else if (n < 0) {
        console.log('Ошибка: число не может быть отрицательным.');
    } else {
        let factorial = 1n; //BigInt
        for (let i = 2n; i <= BigInt(n); i++) {
            factorial *= i;
        }
        console.log(`Факториал = ${factorial}`);
    }

    rl.close();
});
