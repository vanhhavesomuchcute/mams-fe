import { Motorbike } from './motorbike.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'http://localhost:8080/api/v1/mams/motorbike';

@Injectable({
  providedIn: 'root'
})
export class MAMSService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Motorbike[]>{
    return this.httpClient.get<Motorbike[]>(apiUrl).pipe(
    )
  }
}
