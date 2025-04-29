function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {  //Se a hora for maior ou iguam a 0 e a hora for menor que 12:00 é Bom dia 
        img.src = 'imagem/fotomanha2.png'  
        document.body.style.background = '#f0c399'      
    } else if (hora >= 12 && hora < 18) { //Se a hora for maior ou igual a 12:00 e menor que 18:00 horas é Boa tarde
        img.src = 'imagem/fototarde.png'
        document.body.style.background = '#b74b02'
    } else { // Se a hora for maior ou igual a 18:00 e menor que 00:00 é Boa Noite
        img.src = 'imagem/fotonoite.png'
        document.body.style.background = '#071c1d'
    }
}