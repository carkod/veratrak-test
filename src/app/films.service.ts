import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) {
  }

  getFilms(): Observable<any> {
    const reqUrl = `${environment.host + environment.films}`;
    const req = this.http.get(reqUrl, httpOptions);
    return req;
  }

}
