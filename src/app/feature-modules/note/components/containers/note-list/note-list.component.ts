import { NoteID } from 'src/app/models/note/note.model';
import { Note } from './../../../../../models/note/note.model';
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

  constructor(private noteDataService: NoteDataService) {}

  ngOnInit(): void {
    this.noteDataService.fetchNotes();
  }

  addNote(): void {
    this.noteDataService.createNote();
  }

  clickList(id: NoteID): void {
    this.selectedNote = this.noteDataService.getNoteById(id);
  }

  changeTitle(title: string): void {
    console.log(title);
  }

  changeDetail(detail: string): void {
    console.log(detail);
  }
}
