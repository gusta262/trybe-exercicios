let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

for (let index1 in info) {
  for (let index in info2) {
    if (info[index1] === info2[index]) {
      console.log('ambos recorrentes');
    }
    else if (index1 === index) {
      console.log(info[index1], "e", info2[index])
    }
  }
}



