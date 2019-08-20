import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { CustomerService } from '../services/customer.service';
import { MatDialog } from '@angular/material';
import { NewNoteModalComponent } from './new-note/new-note-modal.component';
import { UpdateNoteModalComponent } from './update-note/update-note-modal.component';
import { DeleteNoteModalComponent } from './delete-note/delete-note-modal.component';

@Component({
  selector: 'customer-details',
  styleUrls: ['./customer-details.scss'],
  templateUrl: './customer-details.component.html'
})

export class CustomerDetailsComponent {

  customer: any;

  constructor(
    private notesService: NoteService,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.customer = data.customer;
      }
    })
  }

  openNewNoteModal(customerId) {
    let dialogRef = this.dialog.open(NewNoteModalComponent, {
      data: { customerId: customerId }
    });

    dialogRef.afterClosed().subscribe(note => {
      if (note) {
        this.addNoteToList(note);
      }
    })
  }

  openUpdateNoteModal(note) {
    this.dialog.open(UpdateNoteModalComponent, {
      data: { note: note }
    });
  }

  delete(noteId) {
    let dialogRef = this.dialog.open(DeleteNoteModalComponent, {
      data: { noteId: noteId }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        var index = this.customer.notes.findIndex((note) => note.id === noteId);
        this.customer.notes.splice(index, 1);
      }
    })

  }

  addNoteToList(note) {
    this.customer.notes.push(note);
  }

  updateStatus(status: string){
    this.customerService.updateStatus(this.customer.id, status);
  }

}
