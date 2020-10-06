import { Note, NoteID } from './../../../../../models/note/note.model';
import { NoteDataService } from './../../../services/note-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes$ = this.noteDataService.notes$;

  selectedNote: Note | undefined;
  noteId: NoteID = '';

  constructor(private noteDataService: NoteDataService) {}

  ngOnInit(): void {
    this.noteDataService.fetchNotes();
  }

  addNote(): void {
    this.noteDataService.createNote();
  }

  clickListItem(id: NoteID): void {
    this.noteId = id; // キャッシュする
    this.selectedNote = this.noteDataService.getNoteById(id);
  }

  changeTitle(title: string): void {
    this.noteDataService.updateNote(this.noteId, { title });
  }

  changeDetail(detail: string): void {
    this.noteDataService.updateNote(this.noteId, { detail });
  }
}
