import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FizzBuzzComponent } from './componentes/fizz-buzz/fizz-buzz.component';
import { NumeroDirective } from './diretivas/numero.directive';
import { RetornoPipe } from './filtros/retorno.pipe';
import { DataPipe } from './filtros/data.pipe';
import { HoraPipe } from './filtros/hora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FizzBuzzComponent,
    NumeroDirective,
    RetornoPipe,
    DataPipe,
    HoraPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
