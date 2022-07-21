import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: CountryListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CountryListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

