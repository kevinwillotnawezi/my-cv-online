import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, DefaultTitleStrategy, DefaultUrlSerializer } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export enum routesEnum {
  HOME = "home",
  ABOUT = "about",
  NOT_FOUND = "not-found"
}

const routes: Routes = [
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Configuration existante
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 600],
      
      // Propriétés de configuration du routeur supportées dans Angular 16
      enableTracing: false, // Pour le debugging, mettre à true si nécessaire
      canceledNavigationResolution: 'replace', // 'replace' | 'computed'
      paramsInheritanceStrategy: 'emptyOnly', // 'emptyOnly' | 'always'
      urlUpdateStrategy: 'deferred', // 'deferred' | 'eager'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
