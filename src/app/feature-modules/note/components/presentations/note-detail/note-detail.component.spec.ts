import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Note } from 'src/app/models/note/note.model';
import { getTestNote } from 'src/app/testing/note/models/test-note';

import { NoteDetailComponent } from './note-detail.component';

describe('NoteDetailComponent', () => {
  let component: NoteDetailComponent;
  let fixture: ComponentFixture<NoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteDetailComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetailComponent);
    component = fixture.componentInstance;
    const note: Note = getTestNote();
    component.note = note;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('titleが表示されること', fakeAsync(() => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const excerptEl: HTMLInputElement | null = nativeElement.querySelector(
      '.title'
    );
    fixture.detectChanges();
    tick();
    expect(excerptEl?.value).toEqual('title');
  }));

  it('detailが表示されること', fakeAsync(() => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const excerptEl: HTMLInputElement | null = nativeElement.querySelector(
      '.detail'
    );
    fixture.detectChanges();
    tick();
    expect(excerptEl?.value).toEqual('abcdefg');
  }));

  it('#onChangeTitle() Noteが更新された時、changeTitleベントがemitされること', fakeAsync(() => {
    const note: Note = getTestNote();
    const newNote = {
      ...note,
      title: 'new title',
    };
    component.note = newNote;

    fixture.detectChanges();
    tick();

    component.changeTitle.subscribe((title: Note['title']) =>
      expect(title).toBe(newNote.title)
    );

    const input: HTMLInputElement = fixture.nativeElement.querySelector(
      '.title'
    );

    const event = createNewEvent('input');
    input.dispatchEvent(event);
  }));

  it('#onChangeDetail() Noteが更新された時、onChangeDetailベントがemitされること', fakeAsync(() => {
    const note: Note = getTestNote();
    const newNote = {
      ...note,
      detail: 'ABCDEF',
    };
    component.note = newNote;

    fixture.detectChanges();
    tick();

    component.changeTitle.subscribe((detail: Note['detail']) =>
      expect(detail).toBe(newNote.detail)
    );

    const input: HTMLInputElement = fixture.nativeElement.querySelector(
      '.detail'
    );

    const event = createNewEvent('input');
    input.dispatchEvent(event);
  }));
});

function createNewEvent(
  eventName: string,
  bubbles = false,
  cancelable = false
): CustomEvent {
  const evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}
