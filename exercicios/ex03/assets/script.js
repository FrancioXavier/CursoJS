function contar(){
    let inicio = document.getElementById("inicio");
    let final = document.getElementById("final");
    let passo = document.getElementById("passo");
    let res = document.getElementById("res");
    let i = Number(inicio.value);
    let j = Number(passo.value);
    let k = Number(final.value);

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        window.alert('Impossível contar!')
    }else{
        if(j <= 0){
            window.alert('Passo inválido! Apenas números positivos aceitos.');
            j = 1;
        } else{
                if(i < k){
                while(i <= k){
                    res.innerHTML += `${i} \u{1F449}`;
                    i += j;
                }
            } else{
                while(i >= k){
                    res.innerHTML += `${i} \u{1F449}`;
                    i -= j;
                }
            }
            res.innerHTML += `\u{1F3C1}` 
        }
    }
}