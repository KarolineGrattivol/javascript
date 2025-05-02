function maior() {
    let n1 = Number(window.prompt('Digite um número: '))
    let n2 = Number(window.prompt('Digite outro número: '))

    let res = document.querySelector('section#saida')
    if (n1 > n2) {
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior valor é ${n1}</p>`
    } else if (n1 < n2) {
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior valor é ${n2}</p>`
    } else {
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, ambos são IGUAIS.</p>`
    }
}