import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NoteModel } from "../customer-details/note.model";
import { environment } from '../../environments/environment';

@Injectable()
export class NoteService {

  constructor(private http: Http) { }

  getNotes(customerId: string): Promise<NoteModel[]> {
    return this.http.get(`${environment.api_url}customers/${customerId}/notes`)
      .toPromise()
      .then(res => res.json() as NoteModel[])
  }

  getCustomerNotes(customerId: string) {
    return this.http.get(`${environment.api_url}customers/${customerId}/notes`)
      .toPromise()
      .then(res => res.json() as NoteModel[])
  }

  createNote(note: NoteModel) {
    return this.http.post(`${environment.api_url}notes`, note)
      .toPromise()
      .then(res => res.json() as NoteModel)
  }

  updateNote(note: NoteModel) {
    return this.http.put(`${environment.api_url}notes`, note)
      .toPromise()
      .then(res => res.json() as NoteModel)
  }

  deleteNote(note: NoteModel) {
    return this.http.delete(`${environment.api_url}notes/${note.id}`)
      .toPromise();
  }
}
