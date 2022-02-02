import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { JeffDevTranslateService } from '../translate/jeff-dev-translate.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot(
      {
        loader: { provide: TranslateLoader, useClass: JeffDevTranslateService }
      }
    ),
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    HttpClientModule
  ]
})
export class JeffDevCommonsModule { }
