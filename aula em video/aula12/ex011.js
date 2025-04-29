var idade = 15
console.log(`Você tem ${idade} anos`)
if (idade < 16) { // < MENOR QUE 16
    console.log('Não vota')
} else if (idade < 18 || idade > 65){ // ACIMA DE 16 MENOR DO QUE 18 OU A IDADE ACIMA DE 65
        console.log('Voto opcional')
} else { // MAIOR QUE 18
    console.log('Voto obrigatório') 
}
    
