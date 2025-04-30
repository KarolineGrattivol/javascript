let contador = 0
let res = document.querySelector('section#resultado')
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

function contar(){
    contador ++ // É a mesma coisa que contador = contador + 1
    res.innerHTML = `<p>O contador está com ${contador} cliques.</p>`

}
function zerar(){
    contador = 0
    res.innerHTML = null
}