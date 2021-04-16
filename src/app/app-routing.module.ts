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
  { path: routesEnum.HOME, component: HomeComponent },
  { path: routesEnum.ABOUT, component: AboutComponent },
  { path: routesEnum.NOT_FOUND, component: NotFoundComponent },
  { path: '', redirectTo: routesEnum.HOME, pathMatch: 'full' },
  { path: '**', redirectTo: routesEnum.NOT_FOUND, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
