// let str2 = "HELLO WORLD"
// console.log(str2);
// console.log(str2.toLowerCase());

// let str3 = "hello world 2"
// console.log(str3);
// console.log(str3.toUpperCase());

// alert("MAGA".toLowerCase())


// str.indexOf() поиск позиции строки
// let str5 = "Maga hello world"

// // console.log(str5.indexOf("hello"));

// alert( "Widget with id".includes("Widget") ); // true
// alert( "Hello".includes("Bye") ); // false

let str9 = "Widget hello id"
console.log(str9.startsWith("Wid")); // true проверка с начала
console.log(str9.endsWith("id")); // true проверка с конца

// substring(), substir() и slice() получение подстроки

let str10 = "Hello World"
console.log(str10.substring(3, 7)); // Hel

let str11 = "Hello World"
console.log(str10.substring(-4)); // orld

// slice() копирование строк

// concat() обьдинение строк
let name = "Maga"
age = 25
console.log("hello".concat(" ", name," ", age, " ", "jljdlajdlkdjkeldjlakelkajdkaejdl"));


let str14 = "Hello World Maga"
console.log(str14.split("o")); // разделить строку

// repeat() - Повторить строку
let str15 = "Hello World Maga"
console.log(str15.repeat(50)); // до 16 мигабайт только можно

// trim(), trimEnd(), trimStart() - удалить пробелы в строке
// trim()  в начале
let str17 = "           Hello world"
console.log(str17.trimStart()); // "Hello World"

console.log(str17.trimEnd()); // "Hello World"

// trim() удаляет пробелы с начала и конца
let str18 = "              Hello World                   "
console.log(str18.trim());


