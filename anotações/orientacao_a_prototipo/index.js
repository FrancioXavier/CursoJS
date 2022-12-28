
//ORIENTAÇÃO A PROTÓTIPO

// const pessoa = {
//     genero: "masculino"
// };
// const francio = {
//     nome: "Francio",
//     idade: 19,
//     __proto__: pessoa
// };

// console.log(francio.genero);

//função construtora

// function Pessoa(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
// };
// Pessoa.prototype.falar = function() {
//     console.log(`Olá, me chamo ${this.nome}`);
// }

// const francio = new Pessoa('Francio', 19);

// francio.falar()
const renan = {

    nome: 'Renan'

}



renan.__proto__ = {

    idade: 30

}



console.log(renan.idade)
