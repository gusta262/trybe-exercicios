const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const adicionaTurnoDaNoite = (obj, key, valueKey) => {
      obj[key] = valueKey;
  }

  adicionaTurnoDaNoite(lesson2, 'turno', 'noite');

  const countKeys = (obj) => {
      let arrayKeys = Object.keys(obj);
      let contadorKeys = 0;
      for (let index = 0; index < arrayKeys.length; index += 1) {
        contadorKeys += 1
      }

      return contadorKeys;
  }

  

 const sizeObject = (obj) => {
    let sizeObj = Object.keys(obj).length
    return sizeObj;
 }

 

 const listValues = (obj) => {
    let arrayValues = Object.values(obj);
    return arrayValues
 }

 const allLessons ={};

 Object.assign(allLessons, {lesson1, lesson2, lesson3});

 const countStudents = (allLessons) => {
     let arrayValues1 = Object.values(allLessons.lesson1);
     let numStudesntsL1 = arrayValues1[1];

     let arrayValues2 = Object.values(allLessons.lesson2);
     let numStudesntsL2 = arrayValues2[1];

     let arrayValues3 = Object.values(allLessons.lesson3);
     let numStudesntsL3 = arrayValues3[1];

     let soma = numStudesntsL1 + numStudesntsL2 + numStudesntsL3

     return soma;
     
 }

 const objValuePosition = (obj, position) => {
     let resultValue = Object.values(obj)[position];
     return resultValue;
 }

 
 const verifyPar = (obj, key, valueKey) => {
     const arrayObject = Object.entries(obj);
     let resposta = true;

     for (let index = 0; index < arrayObject.length; index += 1) {
         if (arrayObject[index][0] === key && arrayObject[index][1]) {
            return resposta;
         }
     }

     return resposta = false;
 }

 console.log(verifyPar(lesson3, 'turn', 'noite'));
