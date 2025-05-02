 function reajustar(){
    let nome = window.prompt('Qual é o nome do funcionário?')
    let sal = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let porc = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let res = document.getElementById('res')
    let valor = (sal*porc)/100

    res.innerHTML = `<p>${nome} recebeu um aumento salarial!</p>`
    res.innerHTML = `<p>O salário atual era R$ ${(sal).toFixed(2)}</p>`
    res.innerHTML += `<p>Com um aumento de ${porc}%, o salário vai aumentar R$ ${((sal*porc)/100).toFixed(2)} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${(sal+valor).toFixed(2)}.</p>`
 }