import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeffDevTranslateService implements TranslateLoader {
  constructor(private http: HttpClient) {
  }
  getTranslation(langCountry: string): Observable<any> {
    if (langCountry && langCountry!=='en-US') {
      return this.http.get('/assets/locale/messages.' + langCountry + '.json');
    }
    return this.http.get('/assets/locale/messages.en-US.json');
  }
}
