import { NoteID, NoteState } from '../../../../../models/note/note.model';
import { NoteDataService } from '../../../services/note-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-note',
  templateUrl: './note.container.html',
  styleUrls: ['./note.container.scss'],
})
export class NoteContainerComponent implements OnInit {
  notes$ = this.noteDataService.notes$;
  note$ = this.noteDataService.note$;

  noteId: NoteID = '';

  constructor(private noteDataService: NoteDataService) {}

  ngOnInit(): void {
    this.noteDataService.fetchNotes();
  }

  addNote(): void {
    const id = this.noteDataService.createNote();
    this.noteId = id; // キャッシュする
    const state: NoteState = {
      isSelected: true,
    };
    this.noteDataService.updateNoteStatus(id, state);
    this.noteDataService.fetchNote(id);
  }

  clickListItem(id: NoteID): void {
    this.noteId = id;
    const state: NoteState = {
      isSelected: true,
    };
    this.noteDataService.updateNoteStatus(id, state);
    this.noteDataService.fetchNote(id);
  }

  changeTitle(title: string): void {
    this.noteDataService.updateNote(this.noteId, { title });
  }

  changeDetail(detail: string): void {
    this.noteDataService.updateNote(this.noteId, { detail });
  }
}
