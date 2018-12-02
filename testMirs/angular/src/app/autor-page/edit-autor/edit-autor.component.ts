import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Autor} from '../../shered/model/autor.model';
import {Message} from '../../shered/model/message.model';
import {AutorServices} from '../../shered/services/autor.services';
import {NgForm} from '@angular/forms';
import $ from 'jquery';
import {Book} from '../../shered/model/book.model';

@Component({
  selector: 'app-edit-autor',
  templateUrl: './edit-autor.component.html',
  styleUrls: ['./edit-autor.component.css']
})
export class EditAutorComponent implements OnInit {
  @Input() autor: Autor[] = [];
  @Output() onAutorEdit = new EventEmitter<Autor>();

  currentAutorId = 1;
  currentAutor: Autor;
  message: Message;

  constructor(private autorService: AutorServices) { }

  ngOnInit() {
    $(document).ready(function() {
      $('select').formSelect();
    });
    this.onAutorChange();
    this.message = new Message('lighten', '');
  }

  onAutorChange() {
    this.currentAutor = this.autor
      .find(a => a.id === +this.currentAutorId);
  }

  onSubmit(form: NgForm) {
    let {editname, editData, editFirstName, wfmInput, editLastName } = form.value;
    const autor = new Autor(editname, editData, editFirstName, wfmInput, editLastName, +this.currentAutorId);
    this.autorService.updataCategory(autor)
      .subscribe((autor: Autor) => {
        this.onAutorEdit.emit(autor);
        form.reset();
        this.message.text = 'Автор успешно изменен';
        window.setTimeout(() => this.message.text = '', 5000);

        $(document).ready(function() {
          $('select').formSelect();
        });
      });
  }
  deleteAutor(form: NgForm) {
    let {editname, editData, editFirstName, wfmInput, editLastName } = form.value;
    const autor = new Autor(editname, editData, editFirstName, wfmInput, editLastName, +this.currentAutorId);
    this.autorService.deleteAutor(autor)
      .subscribe((autor: Autor) => {
        form.reset();
        this.autor = this.autor.filter(a => a.id !== autor.id);
        this.message.text = 'Автор успешно удален';
        window.setTimeout(() => this.message.text = '', 5000);
        $(document).ready(function() {
          $('select').formSelect();
        });
      });
  }

}
