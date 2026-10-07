alert ('Seja bem vindo ao jogo do Número Secreto');
let numeroSecreto = parseInt(Math.random()*100 +1); 
console.log(numeroSecreto)
let chute 
let tentativas = 1

// Enquanto chute não for igual ao número secreto

while(chute != numeroSecreto){
    chute = prompt('Digite um número entre 1 e 100');
   {if (chute == numeroSecreto) {
    break;
    } else { 
       if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else  {
        alert (`O número secreto é maior que ${chute}`);
    }
    //Tentativas = tentativas + 1
    tentativas++; 
  }   
}
}
let palavraTentativa= tentativas >1? 'tentativas':'tentativa';
alert(`Parabéns! Você descobriu o número Secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas> 1 ){
 // alert(`Parabéns! Você descobriu o número Secreto! ${numeroSecreto} com ${tentativas} tentativas!`);
//}else {
 // alert(`Parabéns! Você descobriu o número Secreto! ${numeroSecreto} com ${tentativas} tentativa!`);
//}







