import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../services/passenger-dashboard.service";
import { Router } from "@angular/router";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    templateUrl: 'passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    //In typescript by using private, will allow us to inject the dependency into here and tell typescript that its a private method.
    //What Angular will do is take PassengerDashboardService and bind it automatically for you to an internal property called passengerDashboardService.
    constructor(
      private router: Router,
      private passengerDashboardService: PassengerDashboardService) { }

    //The fact that it has an "ng" prefix indicates that angular is actually controlling this function. So, when this component is ready, Angular will then call this ngOnInit function for you.
    ngOnInit(): void {
      this.passengerDashboardService
        .getPassengers()
        //The subscription actually has 2 arguments. The first argument is our response however, we can have a second argument which would be the error. This allows us to esentially use an observable to throw the error so we can do some error handling inside the second argument should we need to. 
        .subscribe((data: Passenger[]) => this.passengers = data);
    }

    handleEdit(event: Passenger) {
      this.passengerDashboardService
        .updatePassenger(event)
        .subscribe((data: Passenger) => {
          this.passengers = this.passengers.map((passenger: Passenger) => {
            //Detect if the current passenger has been edited.
            if(passenger.id === event.id) {
              //This essentially takes the original passenger object and merges the latest changes from the event in.
              passenger = Object.assign({}, passenger, event);
            }
            return passenger;
          });
        });
    }

    handleRemove(event: Passenger) {
      this.passengerDashboardService
        .removePassenger(event)
        .subscribe((data: Passenger) => {
          this.passengers = this.passengers.filter((passenger: Passenger) => {
            return passenger.id !== event.id;
          });
        });
    }

    handleView(event: Passenger) {
      this.router.navigate(['passengers', event.id]);
    }
};