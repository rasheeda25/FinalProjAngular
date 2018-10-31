import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Tower } from '../model/tower';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TowerServiceService {

  baseUrl:string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:6565/towermgmt/Towers"
   }

   getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;

  }
  
  getBaseUrlByCsaId(id: number): string {
    return this.baseUrl + "/csa/" + id;

  }

  getTowerById(id: number): Observable<Tower> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }
  getTowerByCsaId(id: number): Observable<Tower[]> {
    return this.http.get(this.getBaseUrlByCsaId(id)).pipe(
      map(data => data.json())
    );
  }
}
