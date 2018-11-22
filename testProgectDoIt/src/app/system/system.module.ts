import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {SystemRoutingModule} from "./system-routing.module";
import {AgmCoreModule} from '@agm/core';

import { SystemComponent } from './system.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3T5vhRwEXkDtn9FwDfiIHLzxqDW4HB80'
    })
  ],
  declarations: [SystemComponent, AboutPageComponent, HomePageComponent]
})
export class SystemModule { }
