const capitalize = require('../src/capitalize');

if (capitalize('hello') !== 'Hello') {
    throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
    throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');