import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note/note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [
    {
      id: 'a',
      title: 'ほげほげ',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: 'a',
      title: 'ほげほげ',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
