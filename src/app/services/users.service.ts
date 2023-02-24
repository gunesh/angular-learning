import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://reqres.in';
@Injectable({
  providedIn: 'root',
})
@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}
  public get(url): Observable<any> {
    return this.http.get(API_URL + '/api/' + url).pipe(map((res) => res));
  }

  public getFoodFacts(id: string): Observable<any> {
    //Write code calling service to obtain food fact data
    let url = `https://reqres.in/api/product/${id}.json`;
    return this.http.get(url);
  }
}
