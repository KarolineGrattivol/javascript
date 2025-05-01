function clicar(){
    let prod = window.prompt('Que produto você está comprando?')
    let cus = Number(window.prompt(`Quanto custa o ${prod} que você está comprando?`))
    let val = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${prod}?`))
   

    window.alert(`Você comprou ${prod} que custou R$ ${cus}. Deu R$ ${val} em dinheiro e vai receber R$ ${cus-val} de troco.Volte sempre! `)
}