import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListItemComponent } from './note-list-item.component';

describe('NoteListItemComponent', () => {
  let component: NoteListItemComponent;
  let fixture: ComponentFixture<NoteListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('titleに"title"が表示されること', () => {
    component.title = 'title';
    fixture.detectChanges();
    const document: HTMLElement = fixture.nativeElement;
    const titleEl = document.querySelector('.title');
    expect(titleEl?.textContent).toEqual('title');
  });

  it('titleに"Untitled"が表示されること', () => {
    component.title = '';
    fixture.detectChanges();
    const document: HTMLElement = fixture.nativeElement;
    const titleEl = document.querySelector('.title');
    expect(titleEl?.textContent).toEqual('Untitled');
  });

  it('dateに作成日が"yy/MM/dd"形式で表示されること', () => {
    component.createAt = new Date(2020, 10, 20).toISOString();
    fixture.detectChanges();
    const document: HTMLElement = fixture.nativeElement;
    const titleEl = document.querySelector('.date');
    expect(titleEl?.textContent).toEqual('20/11/20');
  });

  it('dateに更新日が"yy/MM/dd"形式で表示されること', () => {
    component.createAt = new Date(2020, 10, 20).toISOString();
    component.updateAt = new Date(2022, 1, 20).toISOString();
    fixture.detectChanges();
    const document: HTMLElement = fixture.nativeElement;
    const titleEl = document.querySelector('.date');
    expect(titleEl?.textContent).toEqual('22/02/20');
  });

  it('excerptに"excerpt"が表示されること', () => {
    component.excerpt = 'excerpt';
    fixture.detectChanges();
    const document: HTMLElement = fixture.nativeElement;
    const excerptEl = document.querySelector('.excerpt');
    expect(excerptEl?.textContent).toEqual('excerpt');
  });
});
