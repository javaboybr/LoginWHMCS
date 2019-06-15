import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  toPostLogin(user: {}) {
    return this.http.post(`homol-agenciacreature-crm-api.herokuapp.com/api/v1/login`, user);
  }

}
