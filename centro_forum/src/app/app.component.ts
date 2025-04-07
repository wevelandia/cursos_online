import { Component } from '@angular/core';

// 1. Declaramos aca las variables:
// La primera $ que es la de JQuery
// La segunda es la función (HOMEINIT) de assets/js/main.js
declare var $:any;
declare function HOMEINIT([]):any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'centro_forum';

  // 2. Definimos el constructor y allí realizamos la ejecución de la función
  // Aca vamos a desplegar todo el contenido de main.js es a travez de la función y no a travez del archivo.
  constructor(){
    setTimeout(() => {
      HOMEINIT($);
    }, 50);
  }
}
