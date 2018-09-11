declare function require(msg:string):any;
var readline=require('readline-sync');

import{carro} from "./carro";
let car:carro=new carro();
car.gas=0;
car.pass=0;

while(true){
  let comandos: string=""+
  "showgas - mostrar a quantidade de gasolina\n"+
  "showpass - mostrar a quantidade de passageiros\n"+
  "in - embarcar passageiro(s)\n"+
  "out - desembarcar passageiro(s)\n"+
  "refil - reabastecer gasolina\n"+
  "drive - dirigir certa distância\n"+
  "sair -  sair do programa\n";
  console.log(comandos);
  let comando:string=readline.
              question ("Digite um comando: ");
  if(comando=="sair"){
    console.log("Até a próxima");
    break;
  }
switch(comando){
  case "showpass":
        console.log(this.pass);
        break;
  
  case "showgas":
        console.log(this.gas);
        break;
  
  case "in":
  {let n:number=Number(readline.question("Digite o número de passageiros a embarcar: "));
  console.log(car.in(n));}
  break;

  case "out":
  {let n:number=Number(readline.question("Digite o número de passageiros a desembarcar: "));
  console.log(car.out(n));}
  break;

  case "refil":
  {let n:number=Number(readline.question("Digite a quantidade de gasolina a reabastecer: "));
  console.log(car.refil(n));}
  break;

  case "drive":
  {let n:number=Number(readline.question("Digite a distância a ser percorrida: "));
  console.log(car.drive(n));}
  break;
  default:
      console.log("Comando inválido");
}
}
