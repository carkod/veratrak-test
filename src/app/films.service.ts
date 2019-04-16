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

  getSingleFilm(id: Number): Observable<any> {
    const reqUrl = `${environment.host + environment.films}${id}`;
    const req = this.http.get(reqUrl, httpOptions);
    return req;
  }

  postSingleFilm(body): Observable<any> {
    const reqUrl = `${environment.post}`;
    const req = this.http.post(reqUrl, body, httpOptions);
    return req;
  }

}
