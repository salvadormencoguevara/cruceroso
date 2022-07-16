import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './componentes/contact/contact.component';
import { AboutComponent } from './componentes/about/about.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PaquetesComponent } from './componentes/paquetes/paquetes.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { Page404Component } from './componentes/page404/page404.component';





const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent}, 
  {path:'menu',component:MenuComponent},  
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'registro',component:RegistroComponent},
  {path:'paquetes',component:PaquetesComponent},
  {path:'pago',component:PagoComponent},
  {path:'**',component:Page404Component,pathMatch:'full'}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
