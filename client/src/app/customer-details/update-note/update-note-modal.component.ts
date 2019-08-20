import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'update-note-modal',
  templateUrl: './update-note-modal.component.html',
  exportAs: 'updateNoteModal',
  styleUrls: ['../../styles/modals.scss']
})

export class UpdateNoteModalComponent implements OnInit{

  noteForm: FormGroup;

  constructor(
    public noteService: NoteService,
    public thisDialogRef: MatDialogRef<UpdateNoteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any
  ){
  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      note: new FormControl(this.modalData.note.note, Validators.required)
    })
  }

  onCloseCancel() {
    this.thisDialogRef.close();
  }

  onSubmit(values){
    let updatedNote = this.modalData.note;
    updatedNote.note = values.note;
    this.noteService.updateNote(updatedNote)
    .then(response => {
      this.thisDialogRef.close(updatedNote);
      this.noteForm.reset();
    })
  }

}
