import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InfoComponent } from './info/info.component';
import { KolaciComponent } from './kolaci/kolaci.component';
import { OdabraniSlatkisComponent } from './odabrani-slatkis/odabrani-slatkis.component';
import { KomentariComponent } from './komentari/komentari.component';
import { PorudzbineComponent } from './porudzbine/porudzbine.component';

const routes: Routes = [
  {path:"", component:IndexComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"login", component:LoginComponent},
  {path:"login/registration", component:RegistrationComponent},
  {path:"main", component:MainPageComponent},
  {path:"main/about", component:InfoComponent},
  {path:"main/kolaci", component:KolaciComponent},
  {path:"main/kolaci/odabraniSlatkis", component:OdabraniSlatkisComponent},
  {path:"main/kolaci/odabraniSlatkis/komentari", component:KomentariComponent},
  {path:"main/orders", component:PorudzbineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
