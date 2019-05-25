import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Chart } from 'chart.js';
import { FormBuilder, FormGroup } from '@angular/forms';
import { range } from 'rxjs';
import { BsDatepickerConfig, DateFormatter, BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';
// import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() from;
  @Input() to;
  lineChart1;
  lineChart2;
  lineData;
  labels;
  datasets = { 'from': { 'data': [], 'label': '' }, 'to': { 'data': [], 'label': '' } };
  datePickerConfig: Partial<BsDatepickerConfig>;
  daterangepickerModel: Date[] =
    [new Date(new Date().setDate(new Date().getDate() - 11)),
    new Date(new Date().setDate(new Date().getDate() - 1))];
  start: string;
  end: string;
  durations = [
    { "name": "1 Week", "days": 7 },
    { "name": "1 Month", "days": 30 },
    { "name": "3 Months", "days": 90 },
    { "name": "6 Months", "days": 180 },
    { "name": "1 Year", "days": 365 },
    { "name": "3 Years", "days": 1095 },
    { "name": "5 Years", "days": 1825 }
  ];
  duration = { "name": "1 Week", "days": 7 };


  constructor(private data: DataService) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      maxDate: new Date(new Date().setDate(new Date().getDate() - 1)),
      showWeekNumbers: false,
      rangeInputFormat: 'YYYY-MM-DD'
    });
  }

  ngOnInit() {
    this.getData();
  }

  ngOnChanges() {
    this.getData();
  }

  parseDate(date: Date): string {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    // console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;


  }

  getData() {
    console.log(this.daterangepickerModel[0], this.daterangepickerModel[1]);
    this.start = this.daterangepickerModel[0] ? this.parseDate(this.daterangepickerModel[0]) : "2018-12-01";
    this.end = this.daterangepickerModel[1] ? this.parseDate(this.daterangepickerModel[1]) : "2018-12-31";
    console.log("start:" + this.start);
    console.log("end:" + this.end);
    this.data.getHistoryRatesBetween(this.start, this.end, this.from, this.to)
      .subscribe(_data => {
        // this.lineData = _data;
        // console.log(this.lineData);
        console.log("get data");

        // this.labels = Object.keys(this.lineData['rates']).sort();
        this.labels = Object.keys(_data['rates']).sort();
        // console.log(this.labels);

        this.datasets['from']['label'] = this.from;
        this.datasets['to']['label'] = this.to;
        this.datasets['from']['data'] = [];
        this.datasets['to']['data'] = [];
        for (let date of this.labels) {
          // this.datasets['from']['data'].push(this.lineData['rates'][date][this.from]);
          // this.datasets['to']['data'].push(this.lineData['rates'][date][this.to]);
          this.datasets['from']['data'].push(_data['rates'][date][this.from]);
          this.datasets['to']['data'].push(_data['rates'][date][this.to]);
        }
        // console.log(this.labels);
        // console.log(this.datasets);
        this.drawChart();
      })
  }

  drawChart() {
    // Line chart:
    document.getElementById("line-chart1").remove();
    document.getElementById("line-chart2").remove();
    const chart1 = document.createElement("canvas");
    chart1.id = "line-chart1";
    const chart2 = document.createElement("canvas");
    chart2.id = "line-chart2";
    document.getElementById("chart1").appendChild(chart1);
    document.getElementById("chart2").appendChild(chart2);



    this.lineChart1 = new Chart('line-chart1', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.datasets['from']['label'],
          data: this.datasets['from']['data'],
          fill: false,
          // lineTension: 0.2,
          borderColor: "red",
          borderWidth: 1
        }
        ]
      },
      options: {
        title: {
          text: `${this.from} per 1 USD`,
          display: true
        },
        maintainAspectRatio: false
      }
    });

    this.lineChart2 = new Chart('line-chart2', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.datasets['to']['label'],
          data: this.datasets['to']['data'],
          fill: false,
          // lineTension: 0.2,
          borderColor: "blue",
          borderWidth: 1
        }
        ]
      },
      options: {
        title: {
          text: `${this.to} per 1 USD`,
          display: true
        },
        maintainAspectRatio: false

      }
    });
  }

}
