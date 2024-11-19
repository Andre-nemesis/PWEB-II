let dado = prompt("Informe o seu nome e sua idade separado por ':' ");
let dados = dado.split(":");

if(dados[1] >= 18){
    alert("Olá adulto " + dados[0] + " !");
}
else{
    alert("Olá jovem " + dados[0] + " !");
}