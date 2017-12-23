import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: Http) {}

      public getData(actionUrl: string): Observable<any> {
        return this.http.get(actionUrl);
    }
}
