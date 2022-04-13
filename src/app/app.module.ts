import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColecaoCursosComponent } from './colecao-cursos/colecao-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ColecaoCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
