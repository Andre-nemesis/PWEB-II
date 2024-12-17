const fs = require('fs');


// ler arquivo
// fs.readFile('example.txt','utf-8',(err,data) => {
//     if (err) throw err;
//     console.log(data);
// });


// escrever no arquivo -> de forma assincrona
// fs.writeFile('example.txt','Hello, Node.js!',(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// escrever no arquivo -> de forma assincrona
fs.appendFile('example.txt','SHEIN',(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});