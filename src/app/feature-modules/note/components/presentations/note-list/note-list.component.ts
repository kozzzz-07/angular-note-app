import { Component, OnInit, Input } from '@angular/core';
import { NoteID, Note } from 'src/app/models/note/note.model';

@Component({
  selector: 'app-presentation-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  @Input() id!: NoteID;
  @Input() title!: Note['title'];
  @Input() excerpt!: Note['excerpt'];
  @Input() createAt!: Note['createAt'];
  @Input() updateAt!: Note['updateAt'];

  date = '';

  constructor() {}

  ngOnInit(): void {}
}
