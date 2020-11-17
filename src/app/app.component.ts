import { Component } from '@angular/core';
import { LicensePlate } from './license-plate';
import { LicensePlateService } from './services/license-plate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-license-store';

  now = new Date();

  licensePlates: LicensePlate[];

  constructor(private service: LicensePlateService) {
    this.service.getList().subscribe(data => this.licensePlates = data);
  }

}
