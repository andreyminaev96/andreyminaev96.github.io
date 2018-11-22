import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  form: FormGroup;
  constructor(
    private usersService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup ({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
    $('.ui.checkbox')
      .checkbox()
    ;
  }

  onSubmit() {
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name);
    this.usersService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        });
      });
  }
  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise(((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({forbiddenEmail: true});
          } else {
            resolve(null);
          }
        });
    }));
  }

}
