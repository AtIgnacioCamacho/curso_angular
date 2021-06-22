import {Component} from '@angular/core'

@Component({
    selector:'app-contador',//para q servía el selector¿?¿?
    //en el template tenemos el html de la vista ¿?¿?¿?¿?¿?
    template:`
    <h1>Hola mundo {{ title}}</h1>
    <h3>La base es: <strong>{{base}}</strong> </h3>
        <button (click) ="acumular(base)" >+{{base}}</button>

        <span>{{numero}}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent{
    public title:string = "Contador App";//'bases';
    public numero:number = 10;
  
    public base:number = 5;

    acumular (valor:number){
      this.numero+=valor;
    } 
}