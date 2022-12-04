const obj = [
    {
        'nome': 'Francio',
        'idade': 19,
        'esta_andando': true,
        'hobbies': ['estuda', 'joga', 'programar'],
        'detalhes_profissao': {
            'formacao': 'Ciencia da computação',
            'cargo': 'junior',
            'tempo': 2,
        }
    },
    {
        'nome': 'Francisco',
        'idade': 19,
        'esta_andando': false,
        'hobbies': ['estuda', 'joga', 'programa'],
        'detalhes_profissao': {
            'formacao': null,
            'cargo': null,
            'tempo': 2
        }
    },
]


//CONVERSÃO DE OBJETO PARA JSON

const jsondata = JSON.stringify(obj); //ADAPTA O OBJETO PARA AS PROPRIEDADES DO JSON

console.log(jsondata)


//CONVERTER JSON PARA OBJETO

const objdata = JSON.parse(jsondata); //ADAPTA O JSON PARA OBJETO EM JAVASCRIPT

console.log(objdata);
console.log(typeof objdata);