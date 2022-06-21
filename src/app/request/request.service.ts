import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

baseurl: string = "http://localhost:5218/api/requests"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]>   {      // creating a GetAll method. Observable<Employee[]> getting an array of data from Employee
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;  //.get is a method of http
  } 
  get(id: number): Observable<Request>   { //creating get method, will input id. return one not an array
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;  
  }
  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
  }
  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<any>;
  }
  remove(id: number): Observable<any>   {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;  
  }
  pay(id: number, request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/pay/${request.id}`, request) as Observable<any>
  }
  approve(id: number, request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/approve/${request.id}`, request) as Observable<any>
  }
  reject(id: number, request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/reject/${request.id}`, request) as Observable<any>
  }
  review(id: number, request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/review/${request.id}`, request) as Observable<any>
  }
}
