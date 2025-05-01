function converter(){
    let m = Number(window.prompt('Digite uma distância em metros (m)'))
    let res = document.getElementById('res')

    res.innerHTML = `<p><strong>A distancia de ${m} metros, corresponde a...</strong></p><hr>`
    res.innerHTML += `<p>${(m/1000).toFixed(3)} quilômetros (Km)</p>`
    res.innerHTML += `<p>${(m/100).toFixed(3)} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${(m/10).toFixed(3)} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${m*10} decímetros (dm)</p>`
    res.innerHTML += `<p>${m*100} centímetros (cm)</p>`
    res.innerHTML += `<p>${m*1000} milímetros (mm)</p>`
}