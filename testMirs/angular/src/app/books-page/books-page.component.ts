import { Component, OnInit } from '@angular/core';
import {Autor} from '../shered/model/autor.model';
import {Book} from '../shered/model/book.model';
import {AutorServices} from '../shered/services/autor.services';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  infoAutor: Autor[] = [];
  books: Book[] = [];
  isLoaded = false;
  constructor(private autorService: AutorServices) {}

  ngOnInit() {
    this.autorService.getBooks()
      .subscribe((book: Book[]) => {
        this.books = book;
        this.isLoaded = true;
      });
    this.autorService.getAutor()
      .subscribe((autor: Autor[]) => {
        this.infoAutor = autor;
        this.isLoaded = true;
        console.log(this.infoAutor);
      } );
  }

  newBookAdded(book: Book) {
    this.books.push(book);
  }
}
