import { Component, OnInit, Input } from '@angular/core';
import { NoteID, Note } from 'src/app/models/note/note.model';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.scss'],
})
export class NoteListItemComponent implements OnInit {
  @Input() id!: NoteID;
  @Input() title!: Note['title'];
  @Input() excerpt!: Note['excerpt'];
  @Input() createAt!: Note['createAt'];
  @Input() updateAt!: Note['updateAt'];

  constructor() {}

  ngOnInit(): void {}
}
