import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';
import {Book} from '../../shered/model/book.model';
import {Autor} from '../../shered/model/autor.model';
import {NgForm} from '@angular/forms';
import {AutorServices} from '../../shered/services/autor.services';
import {Message} from '../../shered/model/message.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input() bookName: Book[] = [];
  @Input() autorName: Autor[] = [];
  genres = [
    {type: 'Деловая литература', label: 'Деловая литература'},
    {type: 'Детективы и Триллеры', label: 'Детективы и Триллеры'},
    {type: 'Документальная литература', label: 'Документальная литература'},
    {type: 'Дом и семья', label: 'Дом и семья'},
    {type: 'Драматургия', label: 'Драматургия'},
    {type: 'Искусство, Искусствоведение, Дизайн', label: 'Искусство, Искусствоведение, Дизайн'},
    {type: 'Компьютеры и Интернет', label: 'Компьютеры и Интернет'},
    {type: 'Литература для детей', label: 'Литература для детей'},
    {type: 'Наука, Образование', label: 'Наука, Образование'},
    {type: 'Поэзия', label: 'Поэзия'},
    {type: 'Приключения', label: 'Приключения'},
    {type: 'Проза', label: 'Проза'},
    {type: 'Прочее', label: 'Прочее'},
    {type: 'Религия, духовность, эзотерика', label: 'Религия, духовность, эзотерика'},
    {type: 'Старинное', label: 'Старинное'},
    {type: 'Техника', label: 'Техника'},
    {type: 'Учебники и пособия', label: 'Учебники и пособия'},
    {type: 'Фантастика', label: 'Фантастика'},
    {type: 'Фольклор', label: 'Фольклор'},
    {type: 'Юмор', label: 'Юмор'},
    {type: 'Другое', label: 'Другое'}
  ];

  bookCurrentId = 1;
  bookCurrent: Book;
  message: Message;

  constructor(private servise: AutorServices) { }

  ngOnInit() {
    this.onBookChange();
    this.message = new Message('lighten', '');
  }
  onBookChange() {
    this.bookCurrent = this.bookName
      .find(b => b.id === +this.bookCurrentId);
  }
  onSubmit(form:NgForm) {
    let {namebook, genre, autorname, numberpage} = form.value;
    const book = new Book(namebook, genre, autorname, numberpage, +this.bookCurrentId);
    this.servise.updataBook(book)
      .subscribe((book: Book) => {
        form.reset();
        this.message.text = 'Книга успешно изменен';
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }
  deleteBook(form:NgForm) {
    let {namebook, genre, autorname, numberpage} = form.value;
    const book = new Book(namebook, genre, autorname, numberpage, +this.bookCurrentId);
    this.servise.deleteBook(book)
      .subscribe((book: Book) => {
        form.reset();
        this.bookName = this.bookName.filter(b => b.id !== book.id);
        this.message.text = 'Книга успешно удалена';
        window.setTimeout(() => this.message.text = '', 5000);
        $(document).ready(function() {
          $('select').formSelect();
        });
      });
  }

}

