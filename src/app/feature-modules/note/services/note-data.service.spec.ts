import { NoteAndState, UpdateNote } from './../../../models/note/note.model';
import { TestBed } from '@angular/core/testing';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NoteRepository } from 'src/app/data/on-memory.data';
import { NoteDataService } from './note-data.service';

describe('NoteDataService', () => {
  let service: NoteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteRepository],
    });
    service = TestBed.inject(NoteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#createNote noteRepositoryからNoteIDがreturnされること', () => {
    const noteRepositorySpy = TestBed.inject(
      NoteRepository
    ) as jasmine.SpyObj<NoteRepository>;

    spyOn<any>(noteRepositorySpy, 'generateId').and.returnValue('1');

    // memo: 同じじゃないの？
    // (noteRepositorySpy as any).generateId.and.returnValue('1');

    expect(service.createNote()).toBe('1');
  });

  it('#fetchNotes noteRepositoryからNotesがストリームされること', () => {
    const noteRepository = TestBed.inject(NoteRepository);
    const subject$ = new Subject();
    const notes$ = service.notes$.pipe(takeUntil(subject$));
    service.createNote();
    forkJoin([notes$, noteRepository.fetchNotes()]).subscribe(
      ([serviceNotesResp, repositoryNotesResp]) => {
        expect(serviceNotesResp).toEqual(repositoryNotesResp);
      }
    );
    service.fetchNotes();
    subject$.next();
  });

  it('#fetchNote noteRepositoryからNoteがストリームされること', () => {
    const note$ = service.note$;
    const id = service.createNote();
    note$.subscribe((note) => {
      // 初回のundefinedを回避
      if (note) {
        expect(note.id).toBe(id);
      }
    });
    service.fetchNote(id);
  });

  it('#updateNoteStatus noteRepositoryからNoteStateが更新されたNotesがreturnされること', () => {
    const notes$ = service.notes$;
    const noteRepositorySpy = TestBed.inject(
      NoteRepository
    ) as jasmine.SpyObj<NoteRepository>;
    const id = '2';

    spyOn<any>(noteRepositorySpy, 'generateId').and.returnValue(id);
    service.createNote();
    service.updateNoteStatus(id, { isSelected: true });

    notes$.subscribe((notes) => {
      const updatedNote = notes.find((note: NoteAndState) => {
        return note.id === id;
      });
      expect(updatedNote?.isSelected).toBe(true);
    });
  });

  it('#updateNote noteRepositoryから更新されたNotesがreturnされること', () => {
    const notes$ = service.notes$;
    const noteRepositorySpy = TestBed.inject(
      NoteRepository
    ) as jasmine.SpyObj<NoteRepository>;
    const id = '3';

    spyOn<any>(noteRepositorySpy, 'generateId').and.returnValue(id);
    service.createNote();

    const note: UpdateNote = {
      title: 'test',
      detail: 'test',
      excerpt: 'test',
    };

    service.updateNote(id, note);

    notes$.subscribe((notes) => {
      console.log(notes);

      const updatedNote = notes.find((n: NoteAndState) => {
        return n.id === id;
      });
      expect(updatedNote?.title).toBe(note.title);
      expect(updatedNote?.detail).toBe(note.detail);
      expect(updatedNote?.excerpt).toBe(note.excerpt);
    });
  });
});
