let vetor = [];
let val = document.getElementById('number');
let res = document.getElementById('verify-content');
let lista = document.getElementById('tabela');


function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else{
        return false;
    }
}


function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else{
        return false;
    }
}

function adicionar(){
    if(isnumero(val.value) && !inlista(val.value, vetor)){

        vetor.push(Number(val.value));
        let item = document.createElement('option');
        item.text = `valor ${val.value} adicionado`;
    
        lista.appendChild(item);
        res.innerHTML = '';
    } else{
        window.alert('Valor inválido ou já encontrado na lista.');
    }

    val.value = '';
    val.focus()


}

function verificar(){
    let maior = 0;
    let menor = 0;
    let media = 0;
    let soma = 0;
    let tam = vetor.length

    for(let pos in vetor){
        if(pos == 0){
            maior = vetor[pos];
            menor = vetor[pos];
        }else{
            if(vetor[pos] > maior){
                maior = vetor[pos];
            } else if(vetor[pos < menor]){
                menor = vetor[pos];
            }
        }
        soma += vetor[pos];
    }

    media = soma/tam;

    res.innerHTML = '';
    res.innerHTML += `O menor valor é ${menor} <br>`;
    res.innerHTML += `O maior valor é ${maior} <br>`;
    res.innerHTML += `A media da lista é ${media} <br>`;
    res.innerHTML += `A soma dos valores da lista é ${soma} <br>`;
    res.innerHTML += `A quantidade de valores da lista é ${tam}`;

}
