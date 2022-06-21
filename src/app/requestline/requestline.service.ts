import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user.class';
import { RequestLine } from './requestline.class';
import { Request } from '../request/request.class'

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl: string = "http://localhost:5218/api/requestlines"

  request!: Request;
  user!: User;
  requestLine!: RequestLine;


  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<RequestLine[]>   {      // creating a GetAll method. Observable<Employee[]> getting an array of data from Employee
    return this.http.get(`${this.baseurl}`) as Observable<RequestLine[]>;  //.get is a method of http
  } 
  get(id: number): Observable<RequestLine>   { //creating get method, will input id. return one not an array
    return this.http.get(`${this.baseurl}/${id}`) as Observable<RequestLine>;  
  }
  create(request: RequestLine): Observable<RequestLine> {
    return this.http.post(`${this.baseurl}`, request) as Observable<RequestLine>;
  }
  change(expl: RequestLine): Observable<any> {
    return this.http.put(`${this.baseurl}/${expl.id}`, expl) as Observable<any>;
  }
  remove(id: number): Observable<any>   {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;  
  }
  review(id: number, request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/review/${request.id}`, request) as Observable<any>;
  }
}
