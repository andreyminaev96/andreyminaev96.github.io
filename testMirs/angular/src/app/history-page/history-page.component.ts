import { Component, OnInit } from '@angular/core';
import {AutorServices} from '../shered/services/autor.services';
import {Book} from '../shered/model/book.model';
import $ from 'jquery';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  books: Book[] = [];
  isLoaded = false;
  serchValue = '' ;
  serchPlaceholder = 'Имя Автора';
  serchField = 'autorname';

  constructor(private autorService: AutorServices) {}

  ngOnInit() {
    this.autorService.getBooks()
      .subscribe((book: Book[]) => {
        this.books = book;
        this.isLoaded = true;
        $(document).ready(function() {
          $('.dropdown-trigger').dropdown();
        });
      });
  }
  changeCriteria(field: string) {
    const namesMap = {
      idx: 'Номер',
      autorname: 'Имя Автора',
      namebook: 'Имя Книги',
      genre: 'Жанр',
      numberpage: 'Страниц в книге'
    };
    $(document).ready(function() {
      $('.dropdown-trigger').dropdown();
    });
    this.serchPlaceholder = namesMap[field];
    this.serchField = field;
  }
}
