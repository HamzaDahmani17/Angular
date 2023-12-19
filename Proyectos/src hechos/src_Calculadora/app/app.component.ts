import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  res: number = 0;
  title = 'Calculadora Hamza';
  num1: String="";
  num2: String="";
  division() {
    this.res = Number(this.num1) / Number(this.num2);
  }
  producto() {
    this.res = Number(this.num1) * Number(this.num2);
  }
  restar() {
    this.res = Number(this.num1) - Number(this.num2);
  }
  sumar() {
    this.res = Number(this.num1) + Number(this.num2);
  }

}