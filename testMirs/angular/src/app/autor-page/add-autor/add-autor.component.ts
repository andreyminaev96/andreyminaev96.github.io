import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import $ from 'jquery';
import {Autor} from '../../shered/model/autor.model';
import {AutorServices} from '../../shered/services/autor.services';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.css']
})
export class AddAutorComponent {
  @Output() onAutorAdd = new EventEmitter<Autor>();

  constructor(private autorServices: AutorServices) {
  }

  onSubmit(form: NgForm) {
    let {name, wfmData, wfmFirstName, wfmInput, wfmLastName} = form.value;

    const autor = new Autor(name, wfmData, wfmFirstName, wfmInput, wfmLastName);
    this.autorServices.addAutor(autor)
      .subscribe((autor: Autor) => {
        form.reset();
        this.onAutorAdd.emit(autor);

        $(document).ready(function () {
          $('select').formSelect();
        });
      });
  }
}
