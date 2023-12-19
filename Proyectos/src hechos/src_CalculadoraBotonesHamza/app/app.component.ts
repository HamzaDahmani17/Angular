import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngCalc';
  visor: String = '';
  vectorO: Array<String> = [];
  vectorN: Array<String> = [];
  num: String = '';
  arrastra: boolean = true;
  operador: String = '';
  total: number = 0;

  operar(valor: string) {
    if (Number(valor) >= 0) {
      if (this.arrastra == false) {
        this.arrastra = true;
        this.num = '';
        this.num += valor;
        this.visor = this.num;
        console.log(this.num);
      } else {
        this.num += valor;
        this.visor = this.num;
        console.log(this.num);
      }
    } else {
      switch (valor) {
        case '-1': {
          // DIVISIÓN
          this.operador = '/';
          this.arrastra = false;
          this.vectorN.push(this.num);
          this.vectorO.push(this.operador);

          console.log(this.vectorN);
          console.log(this.vectorO);

          break;
        }

        case '-2': {
          // PRODUCTO
          this.operador = '*';
          this.arrastra = false;
          this.vectorN.push(this.num);
          this.vectorO.push(this.operador);
          console.log(this.vectorN);
          console.log(this.vectorO);
          break;
        }

        case '-3': {
          // SUMA
          this.operador = '+';
          this.arrastra = false;
          this.vectorN.push(this.num);
          this.vectorO.push(this.operador);
          console.log(this.vectorN);
          console.log(this.vectorO);

          break;
        }
        case '-4': {
          // PONER PUNTO
          this.num += '.';
          break;
        }
        case '-5': {
          // HACER IGUAL
          this.arrastra = false;
          this.vectorN.push(this.num);
          this.calcularResultado();

          break;
        }
        case '-6': {
          // RESTA
          this.operador = '-';
          this.arrastra = false;
          this.vectorN.push(this.num);
          this.vectorO.push(this.operador);

          console.log(this.vectorN);
          console.log(this.vectorO);

          break;
        }

        case '-7': {
          this.arrastra = false;
          this.visor = '';
          this.vectorN = [];
          this.vectorO = [];
          break;
        }
        case '-8': {
          this.arrastra = false;
          break;
        }
      }
    }
  }

  calcularResultado() {
    if (this.vectorN.length == 2 && this.vectorO.length == 1) {
      switch (this.vectorO[0]) {
        case '+':
          this.visor = String(
            Number(this.vectorN[0]) + Number(this.vectorN[1])
          );
          /*console.log(this.visor);
          console.log(Number(this.vectorN[0]));
          console.log(Number(this.vectorN[1]));

          console.log(this.vectorN);
          console.log(this.vectorO);*/
          break;

        case '-':
          this.visor = String(
            Number(this.vectorN[0]) - Number(this.vectorN[1])
          );
          break;

        case '*':
          this.visor = String(
            Number(this.vectorN[0]) * Number(this.vectorN[1])
          );
          break;

        case '/':
          this.visor = String(
            Number(this.vectorN[0]) / Number(this.vectorN[1])
          );
          break;
      }
    } else {
      if (this.vectorO.length == this.vectorN.length - 1) {
        for (let i = 0; i < this.vectorO.length; i++) {
          if (i == 0) {
            switch (this.vectorO[0]) {
              case '+':
                this.total = Number(this.vectorN[0]) + Number(this.vectorN[1]);
                break;

              case '-':
                this.total = Number(this.vectorN[0]) - Number(this.vectorN[1]);
                break;

              case '*':
                this.total = Number(this.vectorN[0]) * Number(this.vectorN[1]);
                break;

              case '/':
                this.total = Number(this.vectorN[0]) / Number(this.vectorN[1]);
                break;
            }
          } else {
            switch (this.vectorO[i]) {
              case '+':
                this.total = this.total + Number(this.vectorN[i + 1]);
                break;

              case '-':
                this.total = this.total - Number(this.vectorN[i + 1]);
                break;

              case '*':
                this.total = this.total * Number(this.vectorN[i + 1]);
                break;

              case '/':
                this.total = this.total / Number(this.vectorN[i + 1]);
                break;
            }
          }
        }
        this.visor = String(this.total);
      }
    }
    this.vectorN = [];
    this.vectorO = [];
    this.arrastra = false;
  }
}
