import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'// este no lo saca aut.

})
export class HeroeComponent{
    public nombre:string ='Iron Man';
    public edad:number =35;

    get nombreMayusculas():string{
        return this.nombre.toUpperCase();//no ser ponen parentesis al llamarlo, x ser un getter, como si fuese una propiedad
    }
    obtenerNombre():string {
        return `${this.nombre} - ${this.edad} ` // entre acentos al revés es html, aquí meto funciones javascript, ¿lo del $ no era de jquery?
    }

    cambiarNombre():void{
        this.nombre="Spiderman";
    }

    cambiarEdad():void{
        this.edad=30;
    }
}