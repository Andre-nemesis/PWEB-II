let numero = prompt("Informe dois números separados por ':'");
let numeros = numero.split(":");

let operacao = prompt("Informe a operação que deseja fazer: ")

let resultado;

switch(operacao){
    case "+":
        resultado =  parseInt(numeros[0]) + parseInt(numeros[1]);
        break;
    case "-":
        resultado =  parseInt(numeros[0]) - parseInt(numeros[1]);
        break;
    case "*":
        resultado =  parseInt(numeros[0]) * parseInt(numeros[1]);
        break;
    case "/":
        if(parseInt(numeros[1])!= 0){
            resultado =  parseInt(numeros[0]) / parseInt(numeros[1]);
        } else {
            alert("Não é possível realizar a divisão por zero");
            break;
        }
        break;
    default:
        alert("Operação inválida");
        break;
 
}


alert(`O resultado da operacao: ${operacao} entre os números: ${numeros[0]} e ${numeros[1]} foi ${resultado}`)