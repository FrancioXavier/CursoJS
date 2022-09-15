// TRATAMENTO DE DADOS

// guardando e usando um dado de prompt na variável

var nome = window.prompt('Digite seu nome')
window.alert('Bem vindo, ' + nome) // concatenação

// variavel nome recebe o dado colocado no prompt, esse dado é usado no alert


// O sinal + serve para concatenação e adição, adição para number e concatenação para string

// EXEMPLO

var str1 = '2'
var str2 = '1'
var s = str1 + str2

//variravel s vai ser igual 21 pois o sinal de mais vai concatenar
// para transformar o dado em numero é usado o Number.parseInt/Float

var n1 = Number.parseInt(str1)
var n2 = Number.parseInt(str2)
var s = n1 + n2

// nesse caso a variavel s vai retornar 3, já que são numeros


// Também é possivel transformar o numero em string

// EXEMPLO

var str3 = String(n1)

// OU

str2.toString()


// TEMPLATE STRING

var tmp = 'template string'
window.alert(`isto é ${tmp}`)

// Document.write escreve na pagina em si

//TRATAMENTO EM STRING

var str1 = 'batata'

str1.toUpperCase
str1.toLowerCase


//TRATAMENTO EM NUMBER

var n3 = 10

n3.toFixed(2) //fixa os decimais em 2 casas
n3.toFixed(2).replace('.', ',') //troca o 10.00 por 10,00
n3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
