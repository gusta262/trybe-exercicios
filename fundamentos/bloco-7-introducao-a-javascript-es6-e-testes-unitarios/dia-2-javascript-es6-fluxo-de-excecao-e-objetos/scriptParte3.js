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

  console.log(countKeys(lesson2));

 const sizeObject = (obj) => {
    let sizeObj = Object.keys(obj).length
    return sizeObj;
 }

 console.log(sizeObject(lesson1));

 const listValues = (obj) => {
    let arrayValues = Object.values(obj);
    return arrayValues
 }

 console.log(listValues(lesson3));

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

 console.log(countStudents(allLessons));

 const objValuePosition = (obj, position) => {
     let resultValue = Object.values(obj)[position];
     return resultValue;
 }

 console.log(objValuePosition(lesson2, 3));
