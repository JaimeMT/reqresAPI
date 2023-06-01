import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../interface/user.interface';
import { Observable } from 'rxjs';
import { Resource } from '../interface/resource.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) {}

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>('https://reqres.in/api/unknown');
  }

  getResource(idResource: string): Observable<Resource> {
    return this.http.get<Resource>(`https://reqres.in/api/unknown/${idResource}`);
  }

}
