function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  function colocaDias () {
    let ulElement = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dia = dezDaysList[index];
        let diaElement = document.createElement('li');

        if (dia === 24 || dia === 25 || dia === 31){
            diaElement.className = 'day holiday'
            diaElement.innerHTML = dia;
            ulElement.appendChild(diaElement);
        }

        if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
            diaElement.className = 'day friday';
            diaElement.innerHTML = dia;
            ulElement.appendChild(diaElement);
        }

        diaElement.localName = 'day';
        diaElement.innerHTML = dia;
        ulElement.appendChild(diaElement);
    }
  }

  colocaDias();

  function createButton (string) {
    let ondeVai = document.querySelector('.buttons-container');
    let dinamicButton = document.createElement('button');
    dinamicButton.id = 'btn-holiday'
    dinamicButton.innerHTML = string;
    ondeVai.appendChild(dinamicButton);
}

createButton('Feriados');