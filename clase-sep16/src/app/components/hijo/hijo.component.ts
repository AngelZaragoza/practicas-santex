import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: ['.hijo{ width: 60%; margin: auto }'],
})
export class HijoComponent implements OnInit {
  @Input() desdePadre: string;
  @Output() eventoHijo = new EventEmitter();
  mensajeHijo: string;

  constructor() {}

  ngOnInit(): void {}

  modificarMensaje(nuevo: HTMLInputElement) {
    this.mensajeHijo = nuevo.value;
    this.eventoHijo.emit(this.mensajeHijo);
  }
}
