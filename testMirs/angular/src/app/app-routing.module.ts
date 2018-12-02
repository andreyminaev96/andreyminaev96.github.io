import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AutorPageComponent} from './autor-page/autor-page.component';
import {BooksPageComponent} from './books-page/books-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';

const router: Routes = [
  {path: '', redirectTo: '/history', pathMatch: 'full'},
  {path: 'autors', component: AutorPageComponent},
  {path: 'books', component: BooksPageComponent},
  {path: 'history', component: HistoryPageComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
