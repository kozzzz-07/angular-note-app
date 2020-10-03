import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note/note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [{ id: 'a' }];

  constructor() {}

  ngOnInit(): void {}
}
