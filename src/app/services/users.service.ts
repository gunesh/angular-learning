import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  public users() {
    return this.http.get(`https://reqres.in/api/users?per_page=200`);
  }

  public addUser(obj: any) {
    console.log(obj);
    return this.http.post(`https://reqres.in/api/user`, {
      name: 'morpheus',
      job: 'leader',
    });
  }
}
