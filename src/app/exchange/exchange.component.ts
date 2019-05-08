import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StringifyOptions } from 'querystring';
import { Subscriber } from 'rxjs';

export interface Currency {
  currency: string;
  rate: any;
}

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  apiData: Object = { 'rates': '' };
  currencies: string[];
  rates: Currency[] = [];
  fromCurrency: string = "AUD";
  toCurrency: string = "USD";
  convertedAmount: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getExchangeRates().subscribe(data => {
      this.apiData = data;
      this.currencies = Object.keys(this.apiData['rates']);
      console.log(this.apiData);

      for (let [key, value] of Object.entries(this.apiData['rates'])) {
        this.rates.push({ currency: key, rate: Number(value) });
      }
    })
    this.data.getHistoryRatesBetween('2018-01-01', '2018-02-01', "AUD", "USD")
      .subscribe(data => {
        console.log(data);
      })
  }

  getRate(currency): number {
    return this.apiData['rates'][currency];
  }

  calculate(convertedAmount: number, fromCurrency: string, toCurrency: string): number {
    return convertedAmount / this.getRate(fromCurrency) * this.getRate(toCurrency)
  }
}
