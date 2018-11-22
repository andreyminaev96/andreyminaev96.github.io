import {Component} from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  lat = 46.469391;
  lng = 30.740883;
  zoome = 5;
  location = false;

  constructor() { }

  addMarker(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.location = true
  }

  buttonPlas(){
   this.zoome = this.zoome +1;
  }
  buttonMinus() {
    this.zoome = this.zoome -1;
  }


}
