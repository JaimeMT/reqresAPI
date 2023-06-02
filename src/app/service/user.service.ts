import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { Observable } from 'rxjs';
import { UserRegister } from '../interface/user-register.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://reqres.in/api/users?page=2');
  }

  getUser(idUser: string): Observable<User> {
    return this.http.get<User>(`https://reqres.in/api/users/${idUser}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('https://reqres.in/api/users', user);
  }

  updateUser(idUser: number, user: User): Observable<User> {
    return this.http.put<User>(`https://reqres.in/api/users/${idUser}`, user);
  }

  deleteUser(idUser: number): Observable<User> {
    return this.http.delete<User>(`https://reqres.in/api/users/${idUser}`);
  }

  login(user: UserRegister): Observable<boolean> {
    return this.http.post<boolean>('https://reqres.in/api/login', user);
  }

  register(user: UserRegister): Observable<boolean> {
    return this.http.post<boolean>('https://reqres.in/api/register', user);
  }

}
