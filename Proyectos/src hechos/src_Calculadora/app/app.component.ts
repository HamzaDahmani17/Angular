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
  num1: any;
  num2: any;
  division() {
    this.res = this.num1 / this.num2;
  }
  producto() {
    this.res = this.num1 * this.num2;
  }
  restar() {
    this.res = this.num1 - this.num2;
  }
  sumar() {
    this.res = this.num1 + this.num2;
  }

}