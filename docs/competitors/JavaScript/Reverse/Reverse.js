const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите строку: ', (input) => {
    if (!input) {
        console.log('Ошибка: строка пуста.');
    } else {
        const reversed = input.split('').reverse().join('');// делим на массив, разворачиваем, соединяем
        console.log(`Перевёрнутая строка: ${reversed}`);
    }

    rl.close();
});
