import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AutorServices} from './shered/services/autor.services';
import { BooksPageComponent } from './books-page/books-page.component';
import { EditBookComponent } from './books-page/edit-book/edit-book.component';
import { AddBookComponent } from './books-page/add-book/add-book.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AutorPageComponent } from './autor-page/autor-page.component';
import { AddAutorComponent } from './autor-page/add-autor/add-autor.component';
import { EditAutorComponent } from './autor-page/edit-autor/edit-autor.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './shered/component/header/header.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import {FilterPipes} from './shered/pipes/filter.pipes';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    EditBookComponent,
    AddBookComponent,
    AutorPageComponent,
    AddAutorComponent,
    EditAutorComponent,
    HeaderComponent,
    HistoryPageComponent,
    FilterPipes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AutorServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
