//OPERADORES RELACIONAIS

5 > 2 // 5 maior que 2 --> TRUE
5 < 2 // 2 menor que 5 --> FALSE
a >= b // a maior OU igual a b
b <= a // b menor OU igual à a
a == b // a igual a b
a != c // a diferente de c

// identidade

5 == 5 // true
5 == '5'// true (o javascript analisa o valor, mesmo sendo de tipos diferentes)
5 === '5'// false (o === indica se é identico em tipo e valor)

//OPERADORES LÓGICOS

//mesma logica do C

! // negação
a > b && b == c // conjunção ou 'e' --> a maior que b e b igual a c
a > b || b > c // disjunçãõ ou 'ou' --> a maior que b ou b maior que c

//OPERADOR TERNÁRIO

media >= 7 ? 'aprovado' : 'reprovado'
// teste        true         false
