import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from './material.module';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [

  { path: '', component: ConsultarComponent },

  { path: 'editar/:id', component: EditarComponent },

];

@NgModule({
  declarations: [AppComponent, AgregarComponent, ConsultarComponent, EditarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
