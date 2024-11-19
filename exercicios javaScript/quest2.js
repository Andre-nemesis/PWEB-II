let arrayNum = []
for(let i=0; i<10; i++){
    arrayNum.push(Math.random(10));
}

function sum(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

let soma = sum(arrayNum);

alert(soma);