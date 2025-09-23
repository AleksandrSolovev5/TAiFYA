const readline = require('readline'); // импорт модуля nodeJS, который позволяет читать строки с клавиатуры

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите радиус круга: ', (input) => {
    const r = parseFloat(input);

    if (isNaN(r)) {
        console.log('Ошибка: введено не число.');
    } else if (r < 0) {
        console.log('Ошибка: радиус не может быть отрицательным.');
    } else {
        const area = Math.PI * r * r;
        console.log(`Площадь круга = ${area.toFixed(6)}`);
    }

    rl.close(); // закрывает интерфейс
});
