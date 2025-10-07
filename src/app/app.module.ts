import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { TitleStrategy, UrlSerializer, DefaultUrlSerializer } from '@angular/router';
import { CustomTitleStrategy } from './services/custom-title.strategy';

@NgModule({
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
})
export class AppModule {}
