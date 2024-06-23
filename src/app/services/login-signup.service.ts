import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8082/users';

  signUp(username: string, password: string, name: string, birthDate: string, email: string){
    return this.http.post(this.url + `/signup`, { username, password, name, birthDate, email })

  } 
}
