//VETORES


let num = [1, 2, 3];

//para adicionar uma posição ao final:

num.push(8);

// num.sort() -> coloca em ordem crescente.


/*
for(let i = 0; i < num.length; i++){
    console.log(`${num[i]}`);
}


FOR IN */

for(let pos in num){
    console.log(`${num[pos]}`);
}


// num.indexOf() == retorna a posiçao do valor ou -1 caso não encontre o valor