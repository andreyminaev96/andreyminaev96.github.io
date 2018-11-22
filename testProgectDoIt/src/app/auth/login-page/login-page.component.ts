import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {Message} from "../../shared/models/message.model";
import {UserService} from "../../shared/services/user.service";
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/models/user.model";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  message: Message;
  constructor(
    private usersService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.message = new Message('red', '');
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({
            text: 'Теперь вы можете зайти в систему',
            type: 'green'
          });
        } else if (params['accessDenied']) {
          this.showMessage({
            text: 'Для работы системы вам необходимо войти',
            type: 'orange'
          });
        }
      });
    this.form = new FormGroup ({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
  onSubmin() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/system/home']);
          } else {
            this.showMessage({
              text: 'Пароль неверный',
              type: 'red'
            });
          }
        } else {
          this.showMessage({
            text: 'Такого пользователя не существует',
            type: 'red'
          });
        }
      });
  }
}
