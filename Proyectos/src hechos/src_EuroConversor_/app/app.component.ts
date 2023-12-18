import { Component } from '@angular/core';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Euroconversor Hamza';
  euros: number = 0;
  yenes: number = 0;
  dolares: number = 0;
  libras: number = 0;
  d_l: number = 1.10;
  d_e: number = 1.08;
  d_y: number = 123.12;

  e_l: number = 0.75;
  e_y: number = 138.413;
  e_d: number = 1.08;

  l_y: number = 207.585;
  l_e: number = 1.5;
  l_d: number = 1.10;

  y_l: number = 0.00005;
  y_e: number = 0.000005;
  y_d: number = 0.0000001;

  actualizarDolares() {
    this.euros = this.dolares * this.d_e;
    this.yenes = this.dolares * this.d_y;
    this.libras = this.dolares * this.d_l;
  }

  actualizarLibras() {
    this.euros = this.libras * this.l_e;
    this.yenes = this.libras * this.l_y;
    this.dolares = this.libras * this.l_d;
  }

  actualizarYenes() {
    this.euros = this.yenes * this.y_e;
    this.libras = this.yenes * this.y_l;
    this.dolares = this.yenes * this.y_d;
  }

  actualizarEuros() {
    this.dolares = this.euros / this.e_d;
    this.libras = this.euros / this.e_l;
    this.yenes = this.euros / this.e_y;
  }

  limpiar() {
    this.dolares = 0;
    this.euros = 0;
    this.libras = 0;
    this.yenes = 0;
  }
}