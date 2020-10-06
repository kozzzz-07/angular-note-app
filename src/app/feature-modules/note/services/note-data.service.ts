import { NoteID } from 'src/app/models/note/note.model';
import { Note, UpdateNote } from './../../../models/note/note.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { noteRepostiry } from 'src/app/data/on-memory.data';

@Injectable({
  providedIn: 'root',
})
export class NoteDataService {
  private _notes$ = new BehaviorSubject<Note[]>([]);

  constructor() {}

  get notes$(): Observable<Note[]> {
    return this._notes$.asObservable();
  }

  fetchNotes(): void {
    noteRepostiry.fetchNotes().subscribe((notes) => {
      this._notes$.next(notes);
    });
  }

  createNote(): void {
    noteRepostiry.createNote().subscribe((notes) => {
      this._notes$.next(notes);
    });
  }

  getNoteById(id: NoteID): Note | undefined {
    return noteRepostiry.getNoteById(id);
  }

  // TODO: 結果返したほうがいい？
  updateNote(id: NoteID, data: UpdateNote) {
    noteRepostiry.updateNote(id, data).subscribe((notes) => {
      this._notes$.next(notes);
    });
  }
}
