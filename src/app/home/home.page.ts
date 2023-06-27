import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  // definição de variaveis para lógica da calculadora
  resultado : string = "";
  num : string = "";
  num2 : string = "";
  opcaoporcentagem : Boolean = false;
  infoporcentagem : string = "";

  //A função ira exibir os digitos colocados pelo usuário
  exibirCalculo(n : string){
    this.infoporcentagem = "";
    this.num = this.resultado
    this.resultado = this.num + n
  }

  //A função ira resetar todos os digitos colocados pelo usuário
  reset(){
    this.opcaoporcentagem = false;
    this.infoporcentagem = "";
    this.resultado = "";
  }

  //A função ira digitar o ultimo digito colocado pelo usuário
  del(){
    this.num = this.resultado;
    this.resultado = this.num.substring(0, this.num.length - 1);
  }

  //A função ira realizar todo o calculo que o usuário desejar
  Calcular(){
    //verificação para ver se o usuário vai desejar ou não ver a porcentagem de um numero
      if(this.opcaoporcentagem){
        this.num = this.resultado;
        this.resultado = eval("this.num2 * this.num / 100");
        this.opcaoporcentagem = false;
      } else{
        this.num = this.resultado;        
        this.num != "" ?  this.resultado = eval(this.num) : alert("Erro! Coloque valores na calculadora!");
      }
  }

  //função usada para recuperar o numero que o usuario deseja ver a porcentagem
  calcularPorcentagem(){
    this.num2 = this.resultado;
    this.infoporcentagem = "Coloque a porcentagem";
    this.resultado = "";
    this.opcaoporcentagem = true;
  }

  //função usada para colocar o primeiro numero que o usuário digitar como negativo
  calcPosNeg(){
    this.num = eval("this.resultado * -1");
    this.resultado = this.num;
  }

}
