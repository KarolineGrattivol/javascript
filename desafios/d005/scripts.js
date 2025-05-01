function converter(){
    let m = Number(window.prompt('Digite uma distância em metros (m)'))
    let res = document.getElementById('res')

    res.innerHTML = `<p><strong>A distancia de ${(m).toLocaleString('pt-Br')} metros, corresponde a...</strong></p><hr>`
    res.innerHTML += `<p>${(m/1000).toLocaleString('pt-Br')} quilômetros (Km)</p>`
    res.innerHTML += `<p>${(m/100).toLocaleString('pt-Br')} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${(m/10).toLocaleString('pt-Br')} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${(m*10).toLocaleString('pt-Br')} decímetros (dm)</p>`
    res.innerHTML += `<p>${(m*100).toLocaleString('pt-Br')} centímetros (cm)</p>`
    res.innerHTML += `<p>${(m*1000).toLocaleString('pt-Br')} milímetros (mm)</p>`
}