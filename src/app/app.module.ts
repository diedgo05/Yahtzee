import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosHomeComponent } from './dados/dados-home/dados-home.component';
import { ObjetivosMenoresComponent } from './dados/objetivos-menores/objetivos-menores.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosHomeComponent,
    ObjetivosMenoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
