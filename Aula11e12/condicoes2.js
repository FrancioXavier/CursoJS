var idade = 66

/* VERIFICA MAIORIDADE

if (idade >= 18){
    console.log("Você é maior de idade")
} else{
    console.log(`Você está a ${-1*(idade-18)} anos da maioridade`)
}*/

/* VERIFICA CONDIÇÃO DE VOTO

if (idade >= 18 && idade < 65) {
    console.log("Você vota.")
} else if (idade >= 16 || idade >= 65){
    console.log("Voto opcional")
} else {
    console.log("Não vota")
}*/

// Switch e Case

/* Verifica dia da semana
var agora = new Date()
var diaSen = agora.getDay()

switch(diaSen){
    case 0:
        console.log("Hoje é domingo")
        break
    case 1:
        console.log("Hoje é segunda")
        break
    case 2:
        console.log("Hoje é terça")
        break
    case 3:
        console.log("Hoje é quarta")
        break 
    case 4:
        console.log("Hoje é quinta")
        break
    case 5:
        console.log("Hoje é sexta")
        break
    case 6:
        console.log("Hoje é sábado")
        break
    default: 
        console.log("Dia inválido")
        break 
}*/