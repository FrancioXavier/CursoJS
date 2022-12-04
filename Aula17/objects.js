//OBJETOS EM JAVASCRIPT

//MESMA COISA DE DICIONÁRIO EM PYTHON

function exibeng(pes){
    console.log(`Engordou ${pes} quilos.`)
}

let obj = {
    nome:'Francio', // nome é uma prorpiedade do objeto
    idade:19, 
    peso: 55.5, 
    engordar(p=0, cb){       // a função engordar é um método do objeto
        this.peso += p;
        cb(p);
    },
    andar: function(km){
        console.log(`${this.nome} andou ${km} metros hoje.`);
    }
}

//obj.engordar(5);
//console.log(obj.peso);

//obj.andar(1000);


// THIS
//MUDA conforme o escopo


//CALLBACK
//Passa uma função como parametro em outra para usar ela dentro do objeto.

obj.engordar(5, obj.exibeng);