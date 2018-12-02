import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import $ from 'jquery';
import {Autor} from '../../shered/model/autor.model';
import {Book} from '../../shered/model/book.model';
import {AutorServices} from '../../shered/services/autor.services';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Input() autorInfo: Autor[] = [];
  @Output() onBookAdd = new EventEmitter<Book>();

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

  constructor(private autorServices: AutorServices) { }

  ngOnInit() {
    $(document).ready(function() {
      $('select').formSelect();
    });
  }
  onSubmit(form: NgForm) {
    let {namebook, genre, autorname, numberpage} = form.value;
    const book = new Book(namebook, genre, autorname, numberpage);
    this.autorServices.addBok(book)
      .subscribe((book: Book) => {
        form.reset();
        this.onBookAdd.emit(book);

        $(document).ready(function() {
          $('select').formSelect();
        });
      });
  }
}
