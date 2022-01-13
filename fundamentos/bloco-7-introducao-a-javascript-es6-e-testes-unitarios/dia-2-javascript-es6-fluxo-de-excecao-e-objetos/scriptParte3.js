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