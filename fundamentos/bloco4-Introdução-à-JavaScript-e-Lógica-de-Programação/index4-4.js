function menorIndice (array) {
  let menor = Math.max(...array);

  for (let index in array) {
    if (menor > array[index]) {
      menor = array[index]; 
    }
  }
  for (let index1 in array){
    if (array[index1] === menor) {
      indice = index1;
    }
  }
  return indice
}

console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));