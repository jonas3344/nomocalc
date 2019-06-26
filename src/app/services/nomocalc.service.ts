import { Injectable } from '@angular/core';
import { InputData } from '../model/input-data';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { OutputData } from '../model/output-data';

@Injectable({
  providedIn: 'root'
})
export class NomocalcService {

  public data: InputData;

  constructor(private http: HttpClient) { }

  public setData(input: InputData) {
    this.data = input;
    console.log(this.data);
  }

  public getData() {
    let token = "12345";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Token': token
      })
    };
    let url = 'http://nomocalc.test/api/nomocalc/nomogram';

    return this.http.post<OutputData>(url, this.data, httpOptions);
  }

}
