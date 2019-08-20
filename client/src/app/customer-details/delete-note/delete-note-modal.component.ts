import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'delete-note-modal',
  templateUrl: 'delete-note-modal.component.html',
  styleUrls: ['../../styles/modals.scss']
})
export class DeleteNoteModalComponent {

  constructor(
    public thisDialogRef: MatDialogRef<DeleteNoteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public noteService: NoteService
  ){}

  onDeleteConfirm() {
    this.noteService.deleteNote(this.modalData.noteId)
    .then(
      res => {
        this.thisDialogRef.close(true);
      })
  }

  onDeleteCancel() {
    this.thisDialogRef.close(false);
  }

}
