export class carro{
 gas: number;
 gasmax: number=10;
 pass: number;
 passmax: number=2;
 km: number;

hasgas(): boolean{
        if (this.gas>0) return true;
        else return false;
}

refil(valor: number): number{
     this.gas+=valor
     if(this.gas>this.gasmax)this.gas=10
     return this.gas;
}

in(valor: number): number|string{
   this.pass+=valor;
   if(this.pass>this.passmax){
    return "Viagem cancelada, ultrapassando numero de passageiros.";
    }else{
    return this.pass;
    }
}

out(valor: number): number|string{
  this.pass-=valor;
  if(this.pass<=0){
    return "Viagem cancelada, quantidade de passageiros insuficiente.";
    }else{
    return this.pass; 
    }
}

drive(valor: number): string|number{
  this.km=valor
  this.gas-=this.km/10
  if(this.gas<=0){
    return "Viagem cancelada, gasolina insuficiente.";
  }else{
    return this.km;
    }
}
}
