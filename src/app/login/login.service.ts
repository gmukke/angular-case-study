import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  ENV = environment

  constructor(private http: HttpClient) { }

  getUser(userName){
    return this.http.get(`${this.ENV.baseURL}/users/${userName}`)
  }
}
