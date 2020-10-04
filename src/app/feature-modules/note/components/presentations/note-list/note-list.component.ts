import { Component, OnInit, Input } from '@angular/core';
import { NoteID, Note } from 'src/app/models/note/note.model';

@Component({
  selector: 'app-presentation-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  @Input() readonly id: NoteID = '';
  @Input() readonly title: Note['title'] = '';
  @Input() readonly excerpt: Note['excerpt'] = '';
  @Input() readonly createAt: Note['createAt'] = '';
  @Input() readonly updateAt: Note['updateAt'] = '';

  date = '';

  constructor() {}

  ngOnInit(): void {}
}
