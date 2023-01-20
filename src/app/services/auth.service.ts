import { Injectable } from '@angular/core';
import {UserData} from "../models/userdata";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userData: UserData) {
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  logout() {
    localStorage.removeItem('userData')
  }
}
