// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-passenger',
//   templateUrl: './passenger.component.html',
//   styleUrl: './passenger.component.css'
// })
// export class PassengerComponent {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {
  flight: { source: string, destination: string, price: number }[] = [
    { source: "Delhi", destination: "Mumbai", price: 500 },
    { source: "Bangalore", destination: "Hyderabad", price: 400 }
  ];
  name: string = '';
  phone: number = 0;
  source: string = '';
  destination: string = '';
  nop: number = 0;
  ispresent: boolean = false;
  isthere: boolean = false;
  totalprice: number = 0;

  checkflight() {
    if (this.name === '' || this.phone === 0 || this.source === '' || this.destination === '') {
      alert("Please enter valid details");
    } else {
      const matchingFlight = this.flight.find(flight => flight.source === this.source && flight.destination === this.destination);

      if (matchingFlight) {
        this.ispresent = true;
        this.totalprice = this.nop * matchingFlight.price;
        if(this.nop>5)
          this.totalprice = this.totalprice - 0.15 * this.totalprice;
        }
      else {
        this.ispresent = false;
      }
    }
    this.isthere = true;
  }
}