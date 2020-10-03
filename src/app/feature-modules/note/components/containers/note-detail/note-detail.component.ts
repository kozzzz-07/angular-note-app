import { NoteID } from './../../../../../models/note/note.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  @Input() readonly id!: NoteID;

  constructor() {}

  ngOnInit(): void {}
}
