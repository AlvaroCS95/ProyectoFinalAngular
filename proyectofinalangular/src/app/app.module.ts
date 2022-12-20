import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ConsultarComponent } from './components/consultar/consultar.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AgregarComponent, ConsultarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
