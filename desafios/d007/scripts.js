let cota = Number(window.prompt('Antes de mais nada.Quanto está a cotação do dólar agora?'))

function converter(){
    let real = Number(window.prompt('Quantos R$ você tem na carteira?'))
    let res = document.getElementById('res')
    

    res.innerHTML = `<p>Com R$ ${real} reais que tem na carteira, você consegue comprar ${(real/cota).toFixed(2)} dolares.</p>`
}