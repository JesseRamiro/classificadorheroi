// Desafio Classificado Heroi 

let nome = "Black Panther"
let teste= true
let xp = 11000
let msg1 = "O Herói de nome "
let msg2 = " está no nível " 
console.log("CLASSIFICADOR DE HEROI")

switch (teste) {
   case xp <= 1000 :
     console.log(msg1 + nome + msg2 + "ferro");
     break;

   case xp >=1001 && xp<=2000:
     console.log(msg1 + nome + msg2 + "bronze");
     break;

   case xp >=2001 && xp<=5000:
     console.log(msg1 + nome + msg2 + "prata")
     break;

   case xp >=5001 && xp<=7000:
     console.log(msg1 + nome + msg2 + "ouro")
     break;

   case xp>=7001 && xp<=8000:
     console.log(msg1 + nome + msg2 + "platina")
     break;

   case xp>=8001 && xp<=9000:
     console.log(msg1 + nome + msg2 + "ascendente")
     break;

   case xp>=9001 && xp<=10000:
     console.log(msg1 + nome + msg2 + "imortal")
     break;

   case xp>10001:
     console.log(msg1 + nome + msg2 + "radiante")
     break;

}

