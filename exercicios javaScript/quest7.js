function reversString(str){
    return str.split('').reverse().join('');
}

let palavra = prompt("Informe uma palavra: ");

alert(`A palavra inversa fica ${reversString(palavra)}`)