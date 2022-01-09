//The best way to think about a module is similar to import/export statements in typescript.
//A module is kind of a container that contains all of our components and dependencies that you need such as services for http requests they will go inside a sepcific module.
//Angluar is split up into multiple modules so each piece of angular (such as the forms or http) lives in a different module.
//The NgModule and the Component decorators which we've used live inside the @angular/core module.
import { NgModule } from "@angular/core";
//Because we are building a browser application, we need to import the browser module.
import { BrowserModule } from "@angular/platform-browser";
//Once we get started into the templates and creating things such as directives, this is where the common module comes into play.
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

//Import AppComponent to include it in our module.
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  //Route for Home Page. When the path is completely empty string, we want to use the HomeComponent.
  { path: '', component: HomeComponent, pathMatch: 'full' },
  //The ** means -> Any routes that do not exist in our application, we'll use the nNotFOundComponent.
  { path: '**', component: NotFoundComponent }
];

//By decorating AppModule with @NgModule, we tell Angular that this AppModule is now an NgModule.
//At runtime, Angular will go and grab this NgModule, find the imports, then will bootstrap our application based on our AppComponent and any further components live inside the "declarations" array.
@NgModule({
  //To actually register this app component in the module we need to create something called declarations.
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule
  ],
  //Because we imported our app.component, we need to tell index.html to bootstrap  this app.component.
  //The root module which is our first module that instantiates the angular app is the only module that contains the bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule {}