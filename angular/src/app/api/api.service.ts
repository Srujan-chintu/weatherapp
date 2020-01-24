import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpclient: HttpClient) { }

  baseUrl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({"Content-Type":"application/json"});


  getweather():Observable<any> {
    return this.httpclient.get(this.baseUrl+ '/weathers/',{headers:this.httpHeaders});
}
}
