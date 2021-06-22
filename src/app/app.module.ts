import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
import { HeroesModule } from './heroes/heroes.module';
//import { ListadoComponent } from './heroes/listado/listado.component';
//Tarea: crear un móodulo ContadorModule que contenga ContadorComponent 
//al no tener digectivas ng no haría falta Commonmodule
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,/*
    ContadorComponent ,
    HeroeComponent,
    ListadoComponent */
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
