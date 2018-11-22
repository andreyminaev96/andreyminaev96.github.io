import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';


@Injectable()
export class UserService {
  constructor(private http: Http) {}
  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
    .pipe(
      map((response: Response) => {
        return response.json();
      }),
      map((user: User[]) => user[0] ? user[0] : undefined)
    );
  }
  createNewUser(user: User): Observable<User> {
    return this.http.post(`http://localhost:3000/users`, user)
      .pipe(
        map((response: Response) => {
          return response.json();
        })
      );
  }

}
