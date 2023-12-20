import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  anterior(sig: HTMLButtonElement, ant: HTMLButtonElement) {
    if (this.posicion <= 0) {
      ant.disabled = true;
    } else {
      this.posicion--;
      this.ruta = this.imagenes[this.posicion];
      sig.disabled = false;
    }
  }

  siguiente(sig: HTMLButtonElement, ant: HTMLButtonElement) {
    if (this.posicion >= 9) {
      sig.disabled = true;
    } else {
      this.posicion++;
      this.ruta = this.imagenes[this.posicion];
      ant.disabled = false;
    }
  }

  disminuir(aum: HTMLButtonElement, dis: HTMLButtonElement) {
    if (this.altura <= 150) {
      dis.disabled = true;
    } else {
      this.ancho = this.ancho - 20;
      this.altura = this.altura - 20;
      aum.disabled = false;
    }
  }

  aumentar(aum: HTMLButtonElement, dis: HTMLButtonElement) {
    if (this.altura >= 450) {
      aum.disabled = true;
    } else {
      this.ancho = this.ancho + 20;
      this.altura = this.altura + 20;
      dis.disabled = false;
    }
  }

  title = 'AngCalc';
  posicion: number = 0;
  imagenes: Array<string> = [
    'https://randomuser.me/api/portraits/women/40.jpg',
    'https://randomuser.me/api/portraits/women/41.jpg',
    'https://randomuser.me/api/portraits/women/42.jpg',
    'https://randomuser.me/api/portraits/women/43.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/40.jpg',
    'https://randomuser.me/api/portraits/men/41.jpg',
    'https://randomuser.me/api/portraits/men/42.jpg',
    'https://randomuser.me/api/portraits/men/43.jpg',
    'https://randomuser.me/api/portraits/men/44.jpg',
  ];
  altura: number = 300;
  ancho: number = 300;
  ruta: string = this.imagenes[0];
  temp: NodeJS.Timeout | undefined;
  stop() {
    clearInterval(this.temp);
  }
  play() {
    if (this.posicion >= this.imagenes.length - 1) {
      this.posicion = 0;
    }
    this.temp = setInterval(() => {
      if (this.posicion >= 10) {
        clearInterval(this.temp);
      } else {
        this.ruta = this.imagenes[this.posicion];
        this.posicion++;
      }
    }, 500);
  }
}
