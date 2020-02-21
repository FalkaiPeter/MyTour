import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  markerinfo = [{longitude:5, latitude:6}, {longitude:15, latitude:63},{longitude:500, latitude:60},{longitude:2, latitude:7},]

  constructor() { }

  ngOnInit() {
  }

}
