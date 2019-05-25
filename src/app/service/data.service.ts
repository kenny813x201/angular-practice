import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getExchangeRates() {
    return this.http.get('https://api.exchangeratesapi.io/latest?base=USD');
  }

  getHistoryRatesBetween(from: string, to: string, country1: string, country2: string) {
    return this.http.get(`https://api.exchangeratesapi.io/history?start_at=${from}&end_at=${to}&symbols=${country1},${country2}&base=USD`)
  }

}