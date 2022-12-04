/*Crie uma classe usuário que deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe.

Crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".

A classe "Admin" por sua vez não recebe parâmetros próprios apenas e-mail e senha da classe pai (super). Deve ser criada uma propriedade interna this.admin = true em seu construtor.

Agora com suas classes formatadas, adicione um método(função) na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não. (Realizando um if).*/

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

class Admin extends User {
    constructor(email, password){
        super(email, password);
        this.admin = false;
    }

    isAdmin(n){
        if(n === 'y'){
            this.admin = true;
        } else {
            this.admin = false;
        }
    }
}

let email = document.getElementById('email');
let password = document.getElementById('password');
let verif = document.getElementsByName('verif');
let res = document.getElementById('res');

var usuario = new Admin(email, password);

function verifica(){
    if(verif[0].checked){
        usuario.isAdmin('y');
        res.innerHTML = 'O usuário é administrador.'
    } else{
        usuario.isAdmin('n');
        res.innerHTML = 'O usuário não é administrador.'
    }
}