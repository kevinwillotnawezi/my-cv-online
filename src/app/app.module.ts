import { BannerComponent } from './pages/home/banner/banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperiencesComponent } from './pages/home/experiences/experiences.component';
import { EducationComponent } from './pages/home/education/education.component';
import { SkillsComponent } from './pages/home/skills/skills.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { TitleStrategy, DefaultTitleStrategy, UrlSerializer, DefaultUrlSerializer } from '@angular/router';
import { CustomTitleStrategy } from './services/custom-title.strategy';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BannerComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent,
    AboutComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
    // Configuration des stratégies du routeur
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
    {
      provide: UrlSerializer,
      useClass: DefaultUrlSerializer,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
