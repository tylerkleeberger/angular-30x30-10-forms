import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of, catchError } from 'rxjs';
import { Registrant } from './registrant';

const BASE_URL = 'http://localhost:3000'


@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  model = 'registrants';

  constructor(private http: HttpClient) { }

  getRegistrants(): Observable<Registrant[]> {
    return this.http.get<Registrant[]>(this.getUrl());
  }

  //get by id
  getRegistrant(id: number): Observable<Registrant> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.get<Registrant>(url);
  }

  //Update Registrant on server -- PUT
  updateRegistrant(Registrant: Registrant): Observable<any> {
    return this.http.put(this.getUrlWithID(Registrant.id), Registrant, this.httpOptions);
  }

  //Add new Registrant on server -- POST
  addRegistrant(Registrant: Registrant): Observable<Registrant> {
    return this.http.post<Registrant>(this.getUrl(), Registrant, this.httpOptions);
  }

  //Delete Registrant on server -- DELETE
  deleteRegistrant(id: number): Observable<Registrant> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.delete<Registrant>(url, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  };

  // private RegistrantsUrl = 'api/Registrants';

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }

  private localHost = 'http://localhost:3000/registrants'

}