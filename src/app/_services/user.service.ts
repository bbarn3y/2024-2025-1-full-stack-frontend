import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = !!this.getToken();

  STORAGE_KEY = 'sessionToken'

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.isLoggedIn = false;
  }

  saveToken(token: string): void {
    localStorage.setItem(this.STORAGE_KEY, token);
    this.isLoggedIn = true;
  }
}
