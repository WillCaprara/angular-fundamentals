import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
//This adds the operator 'map' to the observable object.
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Passenger } from "../models/passenger.interface";

const PASSENGER_API = '/api/passengers';

//We mark our PassengerDashboardService as injectable, and this will tell Angular that we can inject things into its constructor. This allows us to use dependency injection inside our other classes.
@Injectable()
export class PassengerDashboardService {
    //Marking the service as injectable allows us to use depnedency injection...
    constructor(private _http: Http) {

    }

    getPassengers(): Observable<Passenger[]> {
        return this._http
          .get(PASSENGER_API)
          .map((response: Response) => response.json())
          //Depending on what your error response would be, you can set a custom type, but for now we are just going to use "any".
          //Observable.throw(error.json()) will extract the json from the error response.
          .catch((error: any) => Observable.throw(error.json()));
    }

    getPassenger(id: number): Observable<Passenger> {
      return this._http
        .get(`${PASSENGER_API}/${id}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json()));
  }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        return this._http
          .put(`${PASSENGER_API}/${passenger.id}`, passenger)
          .map((response: Response) => response.json())
          .catch((error: any) => Observable.throw(error.json()));
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this._http
          .delete(`${PASSENGER_API}/${passenger.id}`)
          .map((response: Response) => response.json())
          .catch((error: any) => Observable.throw(error.json()));
    }
}