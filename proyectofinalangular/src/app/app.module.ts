import { NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

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
    RouterModule.forRoot(routes, { enableTracing: true }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
