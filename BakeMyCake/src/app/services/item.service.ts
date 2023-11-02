import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../models/cake';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  URL: string = "http://localhost:3000/items";
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Array<Cake>> {
    return this.http.get<Array<Cake>>(this.URL)
  }

  getItem(id?: string) : Observable<Cake>{
    console.log(id);
    return this.http.get<Cake>(`${this.URL}/${id}`);
  }
}
