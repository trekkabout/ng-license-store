import { Component, Input, OnInit } from '@angular/core';
import { LicensePlate } from '../license-plate';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent implements OnInit {

  @Input() plate: LicensePlate;
  @Input() buttonText: string;


  constructor() { }

  ngOnInit(): void {
  }

}
