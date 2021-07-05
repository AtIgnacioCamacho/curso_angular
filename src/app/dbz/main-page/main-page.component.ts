import { Component} from '@angular/core';


interface Personaje{
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  agregar_classic(event:any){
    event.preventDefault();//prevee el conmportamientopor defecto del elemento, en este caso el form
    console.log("hola");
  }

  personajes : Personaje[]=[
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vejetta',
      poder:8500
    }
  ];
  nuevo: Personaje ={
    nombre:'',
    poder:0
  }
  agregar(){
    if ( this.nuevo.nombre.trim().length ===0){
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo=<Personaje>{nombre:'',poder:0};//funcionará esto?, sino, mejor se reinicializa a cadena vacia y 0 ,
    // las otras soluciones serían eliminar el interfaz y cambiar por clase. Si funciona , pero no incicializa a lo que esperaba, así q meto valores y .
  }

  cambiarNombre(event:any){
    console.log(event.target.value);
  }
}
