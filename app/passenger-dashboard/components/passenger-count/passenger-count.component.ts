import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-count',
    templateUrl: 'passenger-count.component.html'
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];

    checkedInCount(): number {
        if(!this.items) {
            return;
        }

        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
};