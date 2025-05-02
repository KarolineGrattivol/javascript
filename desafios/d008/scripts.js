function desconto(){
    let prod = window.prompt('Qual é o produto que você está comprando?')
    let pre = Number(window.prompt(`Qual é o preço do ${prod}?`))
    let res = document.getElementById('res')
    let valor = (pre*10)/100

    res.innerHTML = `<p>Calculando desconto de 10% para ${prod}</p><hr>`
    res.innerHTML += `<p>O preço original era R$ ${(pre).toFixed(2)}. </p>`
    res.innerHTML += `<p>Você acaba de ganhar R$ ${((pre*10)/100).toFixed(2)} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar R$ ${(pre-valor).toFixed(2)} no ${prod}.</p>`
}