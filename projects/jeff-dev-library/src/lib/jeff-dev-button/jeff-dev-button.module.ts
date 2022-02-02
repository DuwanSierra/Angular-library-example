import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeffDevButtonComponent } from './jeff-dev-button.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    JeffDevButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    JeffDevButtonComponent
  ]
})
export class JeffDevButtonModule { }
