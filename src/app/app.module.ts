import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { LanzamientoComponent } from './pages/lanzamiento/lanzamiento.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NovedadesComponent,
    LanzamientoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgDynamicBreadcrumbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
