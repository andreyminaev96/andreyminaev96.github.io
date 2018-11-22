import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {AuthComponent} from "./auth.component";



const router: Routes = [
  {path: '', component: AuthComponent, children: [
      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegistrationPageComponent}
    ]}
];
@NgModule({
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
