import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InfoComponent } from './info/info.component';
import { KolaciComponent } from './kolaci/kolaci.component';
import { OdabraniSlatkisComponent } from './odabrani-slatkis/odabrani-slatkis.component';
import { KomentariComponent } from './komentari/komentari.component';
import { PorudzbineComponent } from './porudzbine/porudzbine.component';
import { NarucivanjeComponent } from './narucivanje/narucivanje.component';
import { ProdavacComponent } from './prodavac/prodavac.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegistrationComponent,
    MainPageComponent,
    InfoComponent,
    KolaciComponent,
    OdabraniSlatkisComponent,
    KomentariComponent,
    PorudzbineComponent,
    NarucivanjeComponent,
    ProdavacComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
