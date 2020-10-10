import { Note } from 'src/app/models/note/note.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-presentation-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  @Input() note!: Note;
  @Output() changeTitle: EventEmitter<string> = new EventEmitter();
  @Output() changeDetail: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
