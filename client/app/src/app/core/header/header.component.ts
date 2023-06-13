import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  currentUser: any;

  constructor() {}
  ngOnInit(): void {
    this.isAuthenticated = true;
    let user = {
      name: 'Flor',
      email: 'flor@gmail.com',
    };
    this.currentUser = user;
  }
}
