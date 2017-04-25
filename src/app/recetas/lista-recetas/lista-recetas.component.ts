import { Component, Output, EventEmitter } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent {


  
  recetas: Array<Receta> = [];

    @Output() recetaSeleccionada = new EventEmitter<Receta>();

  receta: Receta = new Receta('Espaguetis a la Boloñesa','Los espaguetis a la boloñesa, son una de las formas más típicas y conocidas de hacer. Consiste en una pasta, aderezada con una salsa cuyos ingredientes son el tomate y la carne picada. Aunque lleva un buen puñado de ingredientes más','http://static.vix.com/es/sites/default/files/styles/large/public/imj/elgranchef/E/Espaguetis-a-la-bolonesa-2.jpg?itok=6EZU6s9R',['400g de espagueti', ' 1 cebolla', ' 2 zanahorias', '1 hoja de apio', '250g de carne picada de ternera y/o de cerdo', '500g de tomate natural triturado. O 3 enteros. Siempre sin la piel', '1/2 vaso de vino tinto o blanco', ' 1/4 de vaso de leche', '1 cucharadita de orégano', ' sal y pimienta', ' Aceite de oliva']);

  constructor() { }

  seleccionarReceta() {
    this.recetaSeleccionada.emit(this.receta);
  }
}
