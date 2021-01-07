import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaComponent,
    DetalleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
