import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NoteModel } from "../customer-details/note.model";

@Injectable()
export class NoteService {

  constructor(private http: Http) { }

  getNotes(customerId: string): Promise<NoteModel[]> {
    return this.http.get("./assets/notes.json")
      .toPromise()
      .then(res => res.json() as NoteModel[]);
  }

  getCustomerNotes(customerId: string) {
    return this.getNotes(customerId)
      .then(notes => {
        return notes.find((note) => {
          return note.customerId == customerId;
        });
      })
  }

  createNote(note: NoteModel) {
    return this.getNotes(note.customerId)
      .then(customers => {
        return true;
      })
  }

  updateNote(note: NoteModel) {
    return this.getNotes(note.customerId)
      .then(customers => {
        return true;
      })
  }

  deleteNote(note: NoteModel) {
    return this.getNotes(note.customerId)
      .then(customers => {
        return true;
      })
  }
}
