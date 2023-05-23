'use strict';

function BinarioADecimal(num) {
   let resultado = 0
   let exp = num.length - 1 
   
   for (let i = 0;  i < num.length ; i++) {
      resultado += num[i] * Math.pow(2,exp)
      exp--
   }
   return resultado;
}

function DecimalABinario(num) {
   let resultado= "";
   while (num !== 0){
      resultado = (num % 2)+ resultado
      num = Math.floor (num / 2)
   }
   return resultado
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
