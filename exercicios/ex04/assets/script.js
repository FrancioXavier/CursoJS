function tabuada(){
    let valor = document.getElementById('valor');
    res.innerHTML = ''
    if(valor.value.length == 0){
        window.alert('Nenhum numero foi digitado!');
    }else{
        for(i = 1; i <= 10; i++){
            let res = document.getElementById('res');
            let mult = Number(valor.value) * i;
            res.innerHTML += `${Number(valor.value)} x ${i} = ${mult} <br>`;
        }
    }

}