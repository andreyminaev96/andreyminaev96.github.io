import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../shared/services/coments.service";
import {CommentModel} from "../../shared/models/comment.model";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  comments: CommentModel[] = [];
  noteName: string = '';
  constructor(
    private comment: CommentsService
  ) { }

  ngOnInit() {
    this.comment.getComments()
      .subscribe((comment: CommentModel[]) => {
        this.comments = comment
      })
  }
  addNote() {
    this.comment.addNotes(this.noteName)
      .subscribe((note: CommentModel) => {
        this.comments.push(note)
      });
    this.noteName = '';
  }
  deleteNote(coment: CommentModel) {
    this.comment.deleteNote(coment)
      .subscribe((data) => {
         this.comments = this.comments.filter(c => c.id !== coment.id)
      })
  }

}
