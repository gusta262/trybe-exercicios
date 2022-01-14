const techList = (tecnologias, name) => {
  tecListSort = tecnologias.sort();
  tecList = [];

  if (tecnologias.length === 0) {
    return "Vazio!";
  }

  for (let index = 0; index < tecListSort.length; index += 1) {
    tecList.push({
      tech: tecListSort[index],
      name: name,
    });
  };

return tecList;

};


module.exports = techList;