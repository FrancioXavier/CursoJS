function verifica(){
        var nasc = document.getElementById('nasc')
        var sex = document.getElementsByName('radsex')
        var txt = document.getElementById('text')
        var now = new Date()
        var ano = now.getFullYear()
        
        if(nasc.value == 0 || nasc.value > ano){
                window.alert('verifique os dados.')
        } else{
                var idade = ano - Number(nasc.value)
                var gen = ''
                var res = document.getElementById('res')
                var img = document.createElement('img')
                img.setAttribute('id', 'foto')

                if(sex[0].checked){
                        gen = 'masculino'
                        if(idade >=0 && idade <= 10){
                                txt.innerHTML = `Um menino de ${idade} anos`
                                img.setAttribute('src', 'foto-bebe-m.png')
                        }else if(idade > 10 && idade <= 21){
                                img.setAttribute('src', 'foto-jovem-m.png')
                                txt.innerHTML = `Um jovem de ${idade} anos`
                        }else if(idade > 21 && idade <= 50){
                                img.setAttribute('src', 'foto-adulto-m.png')
                                txt.innerHTML = `Um adulto de ${idade} anos`
                        }else if(idade > 50){
                                img.setAttribute('src', 'foto-idoso-m.png')
                                txt.innerHTML = `Um idoso de ${idade} anos`
                        }
                } else{
                        gen = 'feminino'
                        if(idade >=0 && idade <= 10){
                                txt.innerHTML = `Uma menina de ${idade} anos`
                                img.setAttribute('src', 'foto-bebe-f.png')
                        }else if(idade > 10 && idade <= 21){
                                img.setAttribute('src', 'foto-jovem-f.png')
                                txt.innerHTML = `Uma jovem de ${idade} anos`
                        }else if(idade > 21 && idade <= 50){
                                img.setAttribute('src', 'foto-adulto-f.png')
                                txt.innerHTML = `Uma adulta de ${idade} anos`
                        }else if(idade > 50){
                                img.setAttribute('src', 'foto-idoso-f.png')
                                txt.innerHTML = `Uma idosa de ${idade} anos`
                        }
                }

                res.appendChild(img);
        }
}