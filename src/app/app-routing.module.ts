import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { LanzamientoComponent } from './pages/lanzamiento/lanzamiento.component';
import { PlanesComponent } from './pages/planes/planes.component';

const routes: Routes = [
  { path: '*', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'newsletter', component: NovedadesComponent },
  { path: 'lanzamiento', component: LanzamientoComponent },
  { path: 'planes', component: PlanesComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
