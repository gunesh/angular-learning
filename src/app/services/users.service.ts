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
    return this.http.post(`https://reqres.in/api/user`, {
      name: 'morpheus',
      job: 'leader',
    });
  }
  public updateUser(id: number) {
    return this.http.put(`https://reqres.in/api/users/${id}`, {
      name: 'morpheus',
      job: 'leader',
    });
  }

  public deleteUser(id: number) {
    return this.http.delete(`https://reqres.in/api/users/${id}`);
  }
  public viewUser(id: number) {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
