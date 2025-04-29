function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagem/menino.png')
            } else if (idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/meninojovem.png')
            } else if (idade >=21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/homem.png')
            } else { //idade >=50 && idade < 100
                //Idoso
                img.setAttribute('src', 'imagem/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagem/menina.png')
            } else if (idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/meninajovem.png')
            } else if (idade >=21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/mulher.png')
            } else { //idade >=50 && idade < 100
                //Idoso
                img.setAttribute('src', 'imagem/idosa.png')
            }
        }
        res.style.textAlign = 'center' // centralizar o texto
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //appendChild - adicionar um elemento
    }
}