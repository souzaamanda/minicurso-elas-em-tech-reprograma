console.log("hello,world")

var valor = document.querySelector("#ganho-mes")

var hora = document.querySelector("#horas-dia")

var resultado = document.querySelector("#resposta")

// console.log(valor, hora, resultado)

function calcularValorHora(){
    var salarioPorMes = valor.valueAsNumber
    var horasPorDia = hora.valueAsNumber

    var horasPorMes = horasPorDia * 22
    var salarioPorHora = salarioPorMes/horasPorMes

    var salarioDuasCasas = salarioPorHora.toFixed(2)

    console.log(salarioDuasCasas)

    resultado.textContent = "R$" + salarioDuasCasas

    if(salarioDuasCasas < 28.41){
        alert('Por favor, peça uma aumento')
    }else{
        alert("BOOOA! vamo ganhar mais ainda!")
    }
}

// var nota1 = Number(prompt('add nota 1')) 
// var nota2 = Number(prompt('add nota 2')) 

// var media = (nota1+nota2)/2

// if(media >= 6){
//     alert('aprovada')
//     console.log(media)
// }else{
//     alert('reprovada')
//     console.log(media)
// }