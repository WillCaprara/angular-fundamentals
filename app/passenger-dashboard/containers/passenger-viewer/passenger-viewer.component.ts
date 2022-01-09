import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../services/passenger-dashboard.service";
import 'rxjs/operator/switchMap';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    templateUrl: 'passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;

    constructor(private passengerDashboardService: PassengerDashboardService,
            private router: Router,
            private route: ActivatedRoute) {}

    ngOnInit(): void {
        //The switchMap will actually change our subscription from observing changes from the url at this point and basically return a new observable (line 22) and we get the result of the new observable in the .subscribe (line 23).
        //We have the params, the params will change, we get the params data which is an object with an id, we pass that id dynamically into our service, once that service has been resolved we then get our data back through our subscribe and we just bind it to this.passenger.
        this.route.params
            .switchMap((data: Params) => this.passengerDashboardService.getPassenger(data.id))
            .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(event: Passenger) {
        this.passengerDashboardService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, event);
            });
    }

    goBack() {
        this.router.navigate(['passengers']);
    }
};