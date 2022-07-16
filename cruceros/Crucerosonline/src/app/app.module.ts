import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PaquetesComponent } from './componentes/paquetes/paquetes.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { Page404Component } from './componentes/page404/page404.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegistroComponent,
    PaquetesComponent,
    PagoComponent,
    Page404Component
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
