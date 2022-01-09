import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
//containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
//components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";
//services
import { PassengerDashboardService } from "./services/passenger-dashboard.service";

const routes: Routes = [
    { 
        path: 'passengers',
        //These children array contains child routes based off the path passengers.
        children: [
            //This is basically going to be the first component thats rendered when passengers is loaded
            { path: '', component: PassengerDashboardComponent },
            //This is a dynamic route. The :id is dynamic and we will fetch it from the params and then pass it to our service call to get the correct data.
            { path: ':id', component: PassengerViewerComponent }
        ]
    }
];

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerViewerComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        //Because we are using routing, we don't need the "exports" below this because we are not defining the particular elements so we're not actually doing something like passenger and then dashboard inside the other modules so we don't actually need to export them; however, they are getting exported and merged in with this routing definitions; everything gets pulled in to the root module thats why we used the forChild() in the router.
        RouterModule.forChild(routes)
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {};