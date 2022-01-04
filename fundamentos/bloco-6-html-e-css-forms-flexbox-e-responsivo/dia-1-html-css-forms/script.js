function criaEstados () {
    let estados = document.getElementById('estados');
    let arrayEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < arrayEstados.length; index += 1) {
        let option = document.createElement('option');
        option.innerText = arrayEstados[index];
        estados.appendChild(option);
    }
}

criaEstados();