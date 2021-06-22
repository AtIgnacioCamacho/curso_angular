import { Component/* , OnInit  */} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{// implements OnInit {

/*   constructor() {console.log('constructor'); }//el primero en dispararse

  ngOnInit(): void {
    console.log('ngOnInit');
  } */
  heroes: string[] = ['Spiderman','Iron Man','Punisher'];
  borrado:string | undefined;
  heroesEliminados:string[]=[];

  borrarHeroe(){
    console.log('borrando.....');
    /*const*/ this.borrado = this.heroes.shift();
    console.log(this.borrado);
    if(this.borrado!='' && this.borrado !=undefined) //tiene q ser distinto de undefined
      this.heroesEliminados.push((this.borrado?.toString() ?? ''));
    //esto me agregaría una cadena vacía cuando eliminase el último elemento
    //debería comprobar el último shift antes de agregarlo al nuevo

    
    if(this.heroesEliminados[this.heroesEliminados.length-1]=='' )
      {
        this.heroesEliminados.shift();
      }
  }
}
