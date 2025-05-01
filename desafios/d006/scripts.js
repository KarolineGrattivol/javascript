function converter() {
    let cel = Number(window.prompt('Digite uma temperatura em °C (Celsius)'))
    let res = document.getElementById('res')

    res.innerHTML = `<p>A temperatura de ${(cel).toLocaleString('pt-Br')}°C, corresponde a...</p><hr>`
    res.innerHTML += `<p>${(cel+273.15).toLocaleString('pt-Br')}°K (Kelvin)</p>`
    res.innerHTML += `<p>${((cel*9/5)+32).toLocaleString('PT-BR')}°F (Fahrenheit)</p>`
}