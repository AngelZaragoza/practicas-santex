import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: [
  ]
})
export class PadreComponent implements OnInit {
  mensajePadre: string;
  desdeHijo: string;

  constructor() { }

  ngOnInit(): void {
    this.mensajePadre = 'HOLA HIJO';
    this.desdeHijo = '';
  }

  modificarMensaje(nuevo: HTMLInputElement) {
    this.mensajePadre = nuevo.value;
  }

  escuchaHijo($event: string) {
    this.desdeHijo = $event;
  }

}
