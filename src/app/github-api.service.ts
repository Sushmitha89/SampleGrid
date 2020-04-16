import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor( private httpClient :  HttpClient) {}
   getApiData(): Observable<any>{
      const url = 'https://api.github.com/users'
    return this.httpClient.get<any>(url)
    
  }
}
