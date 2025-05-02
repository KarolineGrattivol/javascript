function media(){
    let nom = window.prompt('Qual o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2)/2

    let msg // cria uma variável e deixa ela vazia
    if (med >= 6) { // média maior ou igual a 6
        msg = 'Meus parabéns!'
    } else { // else significa senão
        msg = 'Estude um pouco mais!'
    }
    // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de ${nom}.</p><hr>`
    res.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}.</p>`
    res.innerHTML += `<p>A média final será ${med}.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`

}