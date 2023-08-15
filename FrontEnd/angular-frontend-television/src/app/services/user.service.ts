import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const API_USER_URL = environment.apiUser;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.httpClient.post(API_USER_URL + "/createUser", user);
  }

  loginUser(user: User): Observable<any> {
    return this.httpClient.post(API_USER_URL + "/loginUser", user);
  }
}
