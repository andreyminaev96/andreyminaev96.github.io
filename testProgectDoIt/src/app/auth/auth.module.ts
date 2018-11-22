import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationPageComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {}
