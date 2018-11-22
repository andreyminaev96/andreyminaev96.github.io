import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CommentModel} from "../models/comment.model";

@Injectable()
export class CommentsService {
  constructor(
    private http: Http
  ) {}

  getComments():Observable<CommentModel[]> {
    return this.http.get('http://localhost:3000/comments')
      .pipe(
        map((response: Response) =>  response.json())
      );
  }
  addNotes(noteName: string): Observable<CommentModel>{
    const newNote = {
      note: noteName
    };
    return this.http.post('http://localhost:3000/comments', newNote)
      .pipe(
        map((response: Response) =>  response.json())
      );
  }
  deleteNote(note: any) {
    return this.http.delete(`http://localhost:3000/comments/${note.id}`)
      .pipe(
        map((response: Response) =>  response.json())
      );
  }
}
// AIzaSyB3T5vhRwEXkDtn9FwDfiIHLzxqDW4HB80
