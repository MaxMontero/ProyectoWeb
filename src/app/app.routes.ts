import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestaComponent } from './modules/encuesta/encuesta.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { HomeComponent } from './modules/home/home.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'survey', component: EncuestaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo:'home'  }
];


export const app_routing= RouterModule.forRoot(app_routes);