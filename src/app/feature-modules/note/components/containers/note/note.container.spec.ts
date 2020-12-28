import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteDataService } from '../../../services/note-data.service';

import { NoteContainerComponent } from './note.container';

describe('NoteListComponent', () => {
  let component: NoteContainerComponent;
  let fixture: ComponentFixture<NoteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteContainerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit()の呼び出し時、Noteの取得処理が呼ばれること', () => {
    const service = TestBed.inject(NoteDataService);
    spyOn(service, 'fetchNotes');

    component.ngOnInit();
    expect(service.fetchNotes).toHaveBeenCalled();
  });

  it('addNote()の呼び出し時、Noteの作成処理が呼ばれること', () => {
    const service = TestBed.inject(NoteDataService);
    spyOn(service, 'createNote');
    spyOn(service, 'updateNoteStatus');
    spyOn(service, 'fetchNote');

    component.addNote();
    expect(service.createNote).toHaveBeenCalled();
    expect(service.updateNoteStatus).toHaveBeenCalled();
    expect(service.fetchNote).toHaveBeenCalled();
  });

  it('clickListItem()の呼び出し時、NoteStatusの更新処理が呼ばれること', () => {
    const service = TestBed.inject(NoteDataService);
    spyOn(service, 'updateNoteStatus');
    spyOn(service, 'fetchNote');

    component.clickListItem('1');
    expect(service.updateNoteStatus).toHaveBeenCalled();
    expect(service.fetchNote).toHaveBeenCalled();
  });

  it('changeTitle()の呼び出し時、NoteStatusの更新処理が呼ばれること', () => {
    const service = TestBed.inject(NoteDataService);
    spyOn(service, 'updateNote');

    component.changeTitle('title');
    expect(service.updateNote).toHaveBeenCalled();
  });

  it('changeDetail()の呼び出し時、NoteStatusの更新処理が呼ばれること', () => {
    const service = TestBed.inject(NoteDataService);
    spyOn(service, 'updateNote');

    component.changeTitle('detail');
    expect(service.updateNote).toHaveBeenCalled();
  });
});
