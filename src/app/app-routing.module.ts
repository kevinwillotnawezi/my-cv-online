import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  },
  {
    path: routesEnum.ABOUT,
    component: AboutComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: routesEnum.NOT_FOUND,
    component: NotFoundComponent,
    data: { animation: 'NotFoundPage' },
  },
  { path: '', redirectTo: routesEnum.HOME, pathMatch: 'full' },
  { path: '**', redirectTo: routesEnum.NOT_FOUND },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 600],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
