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

  //A função ira exibir os digitos colocados pelo usuário
  exibirCalculo(n : string){
    this.num = this.resultado
    this.resultado = this.num + n
  }

  //A função ira resetar todos os digitos colocados pelo usuário
  reset(){
    this.resultado = "";
  }

  //A função ira digitar o ultimo digito colocado pelo usuário
  del(){
    this.num = this.resultado;
    this.resultado = this.num.substring(0, this.num.length - 1);
  }

  //A função ira realizar todo o calculo que o usuário desejar
  Calcular(){
    this.num = this.resultado;        
    this.num != "" ?  this.resultado = eval(this.num) : alert("Erro! Coloque valores na calculadora!");   
  }

}
