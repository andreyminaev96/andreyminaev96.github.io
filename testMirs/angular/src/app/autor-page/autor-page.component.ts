import { Component, OnInit } from '@angular/core';
import {Autor} from '../shered/model/autor.model';
import {AutorServices} from '../shered/services/autor.services';

@Component({
  selector: 'app-autor-page',
  templateUrl: './autor-page.component.html',
  styleUrls: ['./autor-page.component.css']
})
export class AutorPageComponent implements OnInit {
  autors: Autor[] = [];
  isLoaded = false;
  constructor(
    private autorService: AutorServices,

  ) { }

  ngOnInit() {
    this.autorService.getAutor()
      .subscribe((autor: Autor[]) => {
        this.autors = autor;
        this.isLoaded = true
      });
  }

  newAutorAdded(autor: Autor) {
    this.autors.push(autor);
  }
  autorWasEdited(autor: Autor) {
    const idx = this.autors.findIndex(a => a.id === autor.id);
    this.autors[idx] = autor;
  }
}
