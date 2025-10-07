import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export enum routesEnum {
  HOME = "home",
  ABOUT = "about",
  NOT_FOUND = "not-found"
}

export const routes: Routes = [
  {
    path: routesEnum.HOME,
    component: HomeComponent,
    data: { animation: 'HomePage' },
    title: 'Accueil'
  },
  {
    path: routesEnum.ABOUT,
    component: AboutComponent,
    data: { animation: 'AboutPage' },
    title: 'À propos'
  },
  {
    path: routesEnum.NOT_FOUND,
    component: NotFoundComponent,
    data: { animation: 'NotFoundPage' },
    title: 'Page non trouvée'
  },
  { path: '', redirectTo: routesEnum.HOME, pathMatch: 'full' },
  { path: '**', redirectTo: routesEnum.NOT_FOUND },
];