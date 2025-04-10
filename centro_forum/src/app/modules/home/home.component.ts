import { AfterViewInit, Component } from '@angular/core';

// 1. Declaramos aca las variables:
// La primera $ que es la de JQuery
// La segunda es la función (HOMEINIT) de assets/js/main.js
declare var $:any;
declare function HOMEINIT([]):any;

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  // 2. Definimos el constructor y allí realizamos la ejecución de la función
  // Aca vamos a desplegar todo el contenido de main.js es a travez de la función y no a travez del archivo.
  constructor(){
    setTimeout(() => {
      HOMEINIT($);
    }, 50);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const el = document.getElementById('counter');
      if (el) {
        const count = el.getAttribute('data-count');
        if (count) el.innerHTML = count;
      }
    }, 1000); // Espera para asegurar que el DOM está listo
  }

}
