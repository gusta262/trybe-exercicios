function indiceMaior (array) {
  let maior = 0;

  for (let index in array) {
    if (array[index] > maior) {
      maior = array[index];
      maior = index;
    }
    else {
      
    }
  }
  return maior
}

console.log(indiceMaior([2, 3, 6, 7, 10, 1]));