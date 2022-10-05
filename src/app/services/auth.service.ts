import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _USER: any;

  constructor() { }

  set user(user) {
    this._USER = user;
  }

  get user() {
    return this._USER;
  }

  signout() {
    this._USER = null;
  }
}
