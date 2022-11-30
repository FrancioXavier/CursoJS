//FUNÇOES

function parouimp(number){
    if(number % 2 == 0){
        console.log(`${number} é par!`);
    } else{
        console.log(`${number} é impar!`);
    }
}

let num = 5;

//parouimp(num);

/*
let batata = function(number){
    if(number % 2 == 0){
        console.log(`${number} é batata!`);
    } else{
        console.log(`${number} não é batata!`);
    }
}*/

let fatorial = function(n){
    if(n == 1){
        return 1;
    } else{
        return n * fatorial(n-1);
    }
}

console.log(`${fatorial(num)}`);