import { Component, Input} from '@angular/core';
import {Coordinates} from "../models/coordinates";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent{
  @Input() coordinates : Coordinates
}
