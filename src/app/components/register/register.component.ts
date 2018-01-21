import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userExits: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

}
