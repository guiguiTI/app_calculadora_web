function insert(num){
    document.getElementById('resultado').innerHTML += num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
    localStorage.removeItem('ultimoResultado');
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.slice(0, -1);
}

function calcular(){
    let expressao = document.getElementById('resultado').innerHTML;
    if(expressao){
        let resultadoFinal = eval(expressao);
        document.getElementById('resultado').innerHTML = resultadoFinal;

        localStorage.setItem('ultimoResultado', resultadoFinal);
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}

window.onload = function () {
    var ultimoResultado = localStorage.getItem('ultimoResultado');
    if (ultimoResultado) {
        document.getElementById('resultado').innerHTML = ultimoResultado;
    }
};
