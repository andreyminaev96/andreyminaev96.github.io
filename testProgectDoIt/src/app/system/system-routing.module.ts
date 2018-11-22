import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';

import {AuthGuard} from '../shared/services/auth.guard';
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";

const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
      {path: 'home', component: HomePageComponent},
      {path: 'about', component: AboutPageComponent}
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
