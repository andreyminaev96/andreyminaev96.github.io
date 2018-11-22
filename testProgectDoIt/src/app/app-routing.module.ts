import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const router: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
