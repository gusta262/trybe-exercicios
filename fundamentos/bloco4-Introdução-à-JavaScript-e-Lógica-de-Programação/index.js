let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// ex 1 

// for (numbers of numbers) {
//     console.log(numbers);
// }

//ex 2

// for (numbers of numbers) {
//     console.log(numbers += 1);
// }

//ex 3

// let conta = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     conta += numbers[index]
// }

// conta = conta / numbers.length
// console.log(conta)

//ex 4

// let conta = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     conta += numbers[index];
// }
    
// conta = conta / numbers.length;

// if (conta > 20) {
//     console.log('valor maior que 20');
// }
// else {
//     console.log('valor menor ou igual a 20');
// }

//ex 5 
let maioral = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maioral) {
        maioral = numbers[index];
    }
}

console.log(maioral);