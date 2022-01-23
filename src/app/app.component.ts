import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css']
})

export class AppComponent {

  tiles: Tile[] = [
    {text: 'One',  cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two',  cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three',cols: 1, rows: 1, color: 'lightpink'},
  ];

  title = 'test-spinar-2';
}