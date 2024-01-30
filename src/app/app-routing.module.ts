import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { LanzamientoComponent } from './pages/lanzamiento/lanzamiento.component';
import { PlanesComponent } from './pages/planes/planes.component';

const routes: Routes = [
  { path: '*', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home', breadcrumb: [{ label: 'Inicio', url: '' }] },
  },
  {
    path: 'newsletter',
    component: NovedadesComponent,
    data: {
      title: 'novedades',
      breadcrumb: [
        { label: 'Inicio', url: '/home' },
        { label: 'Novedades', url: '' },
      ],
    },
  },
  {
    path: 'lanzamiento',
    component: LanzamientoComponent,
    data: {
      title: 'lanzamiento',
      breadcrumb: [
        { label: 'Inicio', url: '/home' },
        { label: 'Lanzamiento', url: '' },
      ],
    },
  },
  {
    path: 'planes',
    component: PlanesComponent,
    data: {
      title: 'planes',
      breadcrumb: [
        { label: 'Inicio', url: '/home' },
        { label: 'Planes', url: '' },
      ],
    },
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
