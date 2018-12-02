import {BaseApi} from '../core/base-api';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Autor} from '../model/autor.model';
import {Observable} from 'rxjs';
import {Book} from '../model/book.model';


@Injectable()
export class AutorServices extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }
  addAutor(autor: Autor): Observable<Autor> {
    return this.post('autor', autor);
  }
  getAutor(): Observable<Autor[]> {
    return this.get('autor');
  }
  updataCategory(autor: Autor): Observable<Autor> {
    return this.put(`autor/${autor.id}`, autor);
  }
  deleteAutor(autor: Autor): Observable<Autor> {
    return this.delete(`autor/${autor.id}`);
  }
  addBok(book: Book): Observable<Book> {
    return this.post('books', book);
  }
  getBooks(): Observable<Book[]> {
    return this.get('books');
  }
  updataBook(book: Book): Observable<Book> {
    return this.put(`books/${book.id}`, book);
  }
  deleteBook(book: Book): Observable<Book> {
    return this.delete(`books/${book.id}`);
  }
}
