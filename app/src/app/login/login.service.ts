import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  toPostLogin(user: {}) {
    return this.http.post(`https://homol-agenciacreature-crm-api.herokuapp.com/api/v1/login`, user)
    .pipe(map(resp =>  [resp]));
  }

}
