import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteModel } from '../note.model';

@Component({
  selector: 'new-note',
  templateUrl: './new-note-modal.component.html',
  exportAs: 'newNoteModal',
  styleUrls: ['../../styles/modals.scss']
})

export class NewNoteModalComponent implements OnInit{

  noteForm: FormGroup;

  constructor(
    public noteService: NoteService,
    public thisDialogRef: MatDialogRef<NewNoteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ){}

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      note: new FormControl('', Validators.required)
    })
  }

  onCloseCancel() {
    this.thisDialogRef.close();
  }

  onSubmit(values){
    let note : any = {};
    note.note = values.note;
    note.customerId = this.modalData.customerId;
    this.noteService.createNote(note)
    .then(response => {
      this.thisDialogRef.close(response);
      this.noteForm.reset();
    })
  }

}
