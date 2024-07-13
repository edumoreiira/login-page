import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AlertService } from './alert.service';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  private url = 'http://localhost:8082/users';

  signUp(username: string, password: string, name: string, birthDate: string, email: string){
    this.alertService.removeAlert();
    return this.http.post(this.url + `/signup`, { username, password, name, birthDate, email });
  } 

  signIn(username: string, password: string){
    this.alertService.removeAlert();
    return this.http.post(this.url + '/login', { username: username, password: password });
  }

  getAllUsers(){
    return this.http.get<User[]>(this.url);
  }

  editUser(id: string, username: string, password: string, name: string, birthDate: string, email: string){
    return this.http.put(this.url, { id, username, password, name, birthDate, email });
  }
}
