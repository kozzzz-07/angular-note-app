import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presentation-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  @Input() title!: string;
  @Input() detail!: string;

  constructor() {}

  ngOnInit(): void {}
}
