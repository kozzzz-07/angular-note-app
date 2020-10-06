import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note, NoteID } from 'src/app/models/note/note.model';

@Component({
  selector: 'app-presentation-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  @Input() notes!: Note[];
  @Output() addNote: EventEmitter<void> = new EventEmitter();
  @Output() clickListItem: EventEmitter<NoteID> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
