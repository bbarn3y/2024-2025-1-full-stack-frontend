import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,
              private userService: UserService) {}

  login(): Observable<{ token: string }> {
    return this.http.get<{ token: string }>('https://mocki.io/v1/cf66eae7-6f41-4703-9878-306ac2f54805')
      .pipe(
        map((response) => {
          // Modify the response here
          this.userService.saveToken(response.token);
          return response;
        })
      );
  }
}
