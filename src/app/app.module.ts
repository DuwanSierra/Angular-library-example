import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JeffDevInputModule } from 'projects/jeff-dev-library/src/lib/jeff-dev-input/jeff-dev-input.module';
import { JeffDevButtonModule } from 'projects/jeff-dev-library/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JeffDevInputModule,
    JeffDevButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
