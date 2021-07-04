import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestModel } from '../models/test.model';
import { EdicaoDisciplinaModel } from '../models/edicaoDisciplina.model'

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  private baseUrl = 'http://ec2-3-16-76-105.us-east-2.compute.amazonaws.com';

  constructor(protected httpClient: HttpClient) { }

  getAllEditions(): Observable<any[]>{
    return this.httpClient.get<EdicaoDisciplinaModel[]>(`${this.baseUrl}/editions`);
  }

  /* getApi(): Observable<any> {
    const url = 'ec2-54-94-166-37.sa-east-1.compute.amazonaws.com:8083/api/students';
    return this.httpClient.get<any>(url);
  } */
}
