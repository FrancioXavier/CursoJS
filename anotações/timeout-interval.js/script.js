//setTimeout
var x = 0;

/*
var mytimer = setTimeout(function (){
    console.log(`o x é ${x}.`);
}, 2000); //DEPOIS DE 2 SEGUNDOS A FUNÇÃO É ACIONADA E FAZ O COMANDO

x = 5;

if(x === 5){

    //clearTimeout
    clearTimeout(mytimer); 
    console.log("O x é 5");
}*/


//setInterval
var myinterval = setInterval(function(){
    console.log('repetindo...')
}, 500); // A CADA 2 SEGUNDOS A FUNÇÃO  É ACIONADA NOVAMENTE



setTimeout(function (){
    console.log(`parou!`);

    //clearInterval
    clearInterval(myinterval);
}, 5000);
