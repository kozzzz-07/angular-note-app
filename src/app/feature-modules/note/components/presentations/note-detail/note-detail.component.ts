import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-presentation-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  @Input() title!: string;
  @Input() detail!: string;
  @Output() changeTitle: EventEmitter<string> = new EventEmitter();
  @Output() changeDetail: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
