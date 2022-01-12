const longestword = phrase => {
    let phraseArray = phrase.split(' ');
    let cont = 0;
    let resultado = '';

    for (let word of phraseArray) {
        if (word.length > cont) {
            cont = word.length;
            resultado = word;
        }
    }

    return resultado;
}

console.log(longestword('Antonio foi no banheiro e não sabemos o que aconteceu'));