import { Component, OnInit } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { DataService } from 'src/app/service/data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {

  }




}
