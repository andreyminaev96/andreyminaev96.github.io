import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./auth/auth.module";
import {UserService} from "./shared/services/user.service";
import {AuthService} from "./shared/services/auth.service";
import {AuthGuard} from "./shared/services/auth.guard";
import {SystemModule} from "./system/system.module";
import {CommentsService} from "./shared/services/coments.service";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    SystemModule,
  ],
  providers: [UserService, AuthService, AuthGuard, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
