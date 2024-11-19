let nome = prompt("Escreva uma palavra: ");

function countVogais(str) {
    let vogais = 'aeiou';
    let contador = 0;

    for (let c of str.toLowerCase()) {
        if (vogais.includes(c)) {
            contador++;
        }
    }

    return contador;

}


alert("A palavra possui " + countVogais(nome) + " vogais.");
