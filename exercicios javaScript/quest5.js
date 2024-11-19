let num = prompt("Informe três números separados por ':'");
let numbers = num.split(":");

numbers = numbers.map(number => parseInt(number))

numbers.sort((a,b)=>a-b)

alert("Números em ordem crescente: "+ numbers);