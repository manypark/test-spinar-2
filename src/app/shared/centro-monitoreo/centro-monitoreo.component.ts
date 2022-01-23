import { Component, OnInit } from '@angular/core';

@Component({
  selector    : 'app-centro-monitoreo',
  templateUrl : './centro-monitoreo.component.html',
  styleUrls   : ['./centro-monitoreo.component.css']
})

export class CentroMonitoreoComponent implements OnInit {

  date = new Date().toLocaleTimeString();

  constructor() {}

  ngOnInit(): void { }

}