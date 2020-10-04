import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListComponent } from './note-list.component';

describe('NoteListComponent', () => {
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
});

// notes: Note[] = [
//   {
//     id: 'a',
//     title: 'ほげほげ',
//     createAt: '2020/04/01',
//     excerpt:
//       'あああああああああああああああああああああああああああああああああああ',
//   },
//   {
//     id: 'a',
//     title: 'ほげほげ',
//     createAt: '2020/04/01',
//     excerpt:
//       'あああああああああああああああああああああああああああああああああああ',
//   },
// ];
