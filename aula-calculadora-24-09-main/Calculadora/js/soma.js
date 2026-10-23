
    var n1 = document.querySelector('#n1');
    var n2 = document.querySelector('#n2');
    var resultado = document.querySelector('#resultado');

    function somar() {
      resultado.innerHTML = Number(n1.value) + Number(n2.value);
    }

    function subtrair() {
      resultado.innerHTML = Number(n1.value) - Number(n2.value);
    }

    function multiplicar() {
      resultado.innerHTML = Number(n1.value) * Number(n2.value);
    }

    function dividir() {
      if (Number(n2.value) === 0) {
        resultado.innerHTML = 'Erro: Divisão por zero';
      } else {
        resultado.innerHTML = Number(n1.value) / Number(n2.value);
      }
    }


    
var opcao = parseInt (prompt("1 - somar 2 - subtracao 3 - multiplicacao 4 - divisao 5 - areadoquadrado 6 - areadotriangulo 7 - area do retangulo "));
if (opcao == 1) { 
   
    console.log (somar(a, b));
} else if (opcao == 2) {    
   
        console.log(subtracao(a, b));
    } else if (opcao == 3){

      console.log(multiplicação(a, b));
    } else if (opcao == 4)

     console.log(divisão(a, b));{
    } if (opcao == 5) {
 
     console.log(areadoquadrado (a, b));
    }else if (opcao == 6){

      console.log(areadotriangulo(a, b));
    }else if (opcao == 7){

    }
    


    