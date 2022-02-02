import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeffDevInputComponent } from './jeff-dev-input.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    JeffDevInputComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    JeffDevInputComponent
  ]
})
export class JeffDevInputModule { }
