import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteAndState, NoteID } from 'src/app/models/note/note.model';
import { getTestNotes } from 'src/app/testing/note/models/test-note';

import { NoteListComponent } from './note-list.component';

fdescribe('NoteListComponent', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('"ADD Note"がクリックされた時、addNoteイベントがemitされること', () => {
    // MEMO: clickイベントを発火させるパターン
    spyOn(component.addNote, 'emit');
    const nativeElement: HTMLElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.button');
    button?.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.addNote.emit).toHaveBeenCalled();
  });

  it('#onClickListItem() itemがクリックされた時、clickListItemイベントがemitされること', () => {
    // MEMO: subscribeさせるパターン
    const notes: NoteAndState[] = getTestNotes();
    component.notes = notes;
    component.clickListItem.subscribe((selectedNoteId: NoteID) =>
      expect(selectedNoteId).toBe(notes[0].id)
    );
    component.onClickListItem(notes[0].id);
  });
});
