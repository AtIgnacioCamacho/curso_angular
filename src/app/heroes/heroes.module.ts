import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({//todo esto a mano
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],//ahora q va a ser visible
    exports:[
        ListadoComponent
    ],//y q módulos importamos
    imports:[
        CommonModule
    ]
})
export class  HeroesModule{}