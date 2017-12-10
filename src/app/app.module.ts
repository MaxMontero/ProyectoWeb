import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { MenuComponent } from './shared/components/menu/menu.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { EncuestaComponent  } from './modules/encuesta/encuesta.component';
import { HomeComponent  } from './modules/home/home.component';
import { ContactoComponent  } from './modules/contacto/contacto.component';
import { PruebaComponent  } from './modules/Prueba/prueba.component';
import { FooterComponent  } from './shared/components/footer/footer.component';

import { OwlModule } from 'ngx-owl-carousel';

import { app_routing } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    EncuestaComponent,
    PruebaComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    OwlModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
