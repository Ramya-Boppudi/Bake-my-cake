import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customerdetails';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  URL: string = "http://localhost:3000/orderRequests";
  constructor(private http: HttpClient) { }

  getAllOrderReqeusts() : Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(`${this.URL}`);
  }

  saveOrderRequest(orderRequest? : Customer) : Observable<Customer> {
    return this.http.post<Customer>(`${this.URL}`, orderRequest)
  }
}
