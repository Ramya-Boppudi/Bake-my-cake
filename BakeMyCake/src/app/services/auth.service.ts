import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn:boolean=false;
  isLoggedOut:boolean=false;
  login(adminCode: string) {
        this.isLoggedIn = adminCode === "12345";
    }

    logout() {
        this.isLoggedOut = true;
    }
}
