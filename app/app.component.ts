//Component is a decorator. A decorator is esentially a function that annotates a specific function.
//In this case we will be using the component decorator against a typescript class to tell angular some metadata like our template and the selector of our element because when we create components we create custom elements.
import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

//Because it is a decorator (which is a typescript feature), we need to prefix it with @. This is what we need to do to get our component registered in angular (to tell it it is a component).
@Component({
  selector: 'app-root', //The selector esentially creates an element in the html. If we go to index.html we will see that we have <app-root></app-root>. All angular projects hace a base root component that then renders the entire application.
  styleUrls: ['app.component.scss'], //Reference to our sass file to style a particular component.
  templateUrl: 'app.component.html' //You can also use a template as inline string with ``.
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: false
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ];
};