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
  resultado : string = "";
  num : string = "";
  exibirCalculo(n : string){
    this.num = this.resultado
    this.resultado = this.num + n
  }
  reset(){
    this.resultado = "";
  }
  del(){
    this.num = this.resultado;
    this.resultado = this.num.substring(0, this.num.length - 1);
  }
  Calcular(){
    this.num = this.resultado;
    this.num != "" ?  this.resultado = eval(this.num) : alert("Erro! Coloque valores na calculadora!");   
    
  }
}
