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
let conta = 0;

for (let index = 0; index < numbers.length; index += 1) {
    conta += numbers[index]
}

conta = conta / numbers.length
console.log(conta)