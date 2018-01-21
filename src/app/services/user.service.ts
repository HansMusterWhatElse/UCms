import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(user) {
    return this.http.post('http://localhost:60438/api/users/register', user);
  }

  login(user) {
    return this.http.post('http://localhost:60438/api/users/login', user);
  }
}
