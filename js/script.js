// Carne - 400 Gramas por pessoa + 6 horas 659 Gramas
// Cerveja - 1200 ml por pessoa + 6 hora 2000 ml
// Refrigerante/água - 1000 ml por pessoa + 6 horas 1500 ml

// crianças valem por 0,5
let adultos = document.getElementById("adultos")
let criancas = document.getElementById("criancas")
let duracao = document.getElementById("duracao")
let resultado = document.getElementsByClassName("resultado")[0]

function calcular(){
    if(adultos.value == "" && criancas.value == "" && duracao.value == ""){
        alert("Preencha todos os campos!")
        return false
    }
    let gramasCarne = calcularCarne()
    let mlCerveja = calcularCerveja()
    let mlBebidas = calcularbebidas()
    
    let qtdCarne = Math.ceil((gramasCarne * (parseInt(adultos.value)) + (gramasCarne * (parseInt(criancas.value))) / 2)/1000)
    let qtdCerveja = Math.ceil((mlCerveja * (parseInt(adultos.value))/399))
    let qtdBebidas = Math.ceil(((mlBebidas * (parseInt(adultos.value))) + (mlBebidas * (parseInt(criancas.value))) / 2)/2000)

    resultado.innerHTML = `<p><img src="imagens/icons8-bife-raro-16.png"> ${qtdCarne } Kg de carne</p>`
    resultado.innerHTML += `<p><img src="imagens/icons8-lata-de-cerveja-16.png"> ${qtdCerveja } Latas de 399ml de cervejas</p>`
    resultado.innerHTML += `<p><img src="imagens/icons8-comida-fast-food-street-food-06-16.png"> ${qtdBebidas } Garrafas pest's de 2L de bebidas</p>`
}

function calcularCarne(){
    if(duracao.value >= 6){
        return 650   
    }else{
        return 400
    }
}
function calcularCerveja(){
    if(duracao.value >= 6){
        return 2000   
    }else{
        return 1200
    }
}
function calcularbebidas(){
    if(duracao.value >= 6){
        return 1500  
    }else{
        return 1000
    }
}
