import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Registration Page';
  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/registration', icon: 'people', title: 'Registrants'},
    { path: '/register', icon: 'receipt', title: 'Register'}
  ]
}
