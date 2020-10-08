import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  NgZone,
} from '@angular/core';

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

  constructor(private zone: NgZone) {
    zone.onMicrotaskEmpty.subscribe(() => {
      console.log('detect change');
      console.log(this.title);
      console.log(this.detail);
    });
  }

  ngOnInit(): void {}
}
