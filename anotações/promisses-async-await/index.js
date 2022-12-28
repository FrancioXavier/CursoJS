//Assíncronismo

//promises

//criando promises

// const promessaUmNumeroQualquer = new Promise((resolve, reject) => {
//     const numero = parseInt(Math.random() * 100);
//     resolve(numero);
// });

// promessaUmNumeroQualquer.then((value) => {
//     console.log(value);
// }).catch(err => {
//     console.log(`Houve um erro: ${err}`);
// });


//ASYNC E AWAIT

const fs = require('fs')

async function buscaArquivo(){
    const tarefas = await fs.promises.readFile(__dirname + '/exemplo.csv');

    console.log(tarefas.toString('utf-8'));

}

buscaArquivo()