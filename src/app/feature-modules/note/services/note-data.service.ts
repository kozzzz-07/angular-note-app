import {
  NoteID,
  NoteAndState,
  NoteState,
} from 'src/app/models/note/note.model';
import { UpdateNote } from './../../../models/note/note.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { noteRepostiry } from 'src/app/data/on-memory.data';

@Injectable({
  providedIn: 'root',
})
export class NoteDataService {
  private _notes$ = new BehaviorSubject<NoteAndState[]>([]);
  private _note$ = new BehaviorSubject<NoteAndState | undefined>(undefined);

  constructor() {}

  get notes$(): Observable<NoteAndState[]> {
    return this._notes$.asObservable();
  }

  get note$(): Observable<NoteAndState | undefined> {
    return this._note$.asObservable();
  }

  fetchNotes(): void {
    noteRepostiry.fetchNotes().subscribe((notes) => {
      this._notes$.next(notes);
    });
  }

  createNote(): NoteID {
    return noteRepostiry.createNote();
  }

  fetchNote(id: NoteID): void {
    noteRepostiry.getNoteById(id).subscribe((note) => {
      this._note$.next(note);
    });
  }

  updateNoteStatus(id: NoteID, state: NoteState): void {
    noteRepostiry.updateNoteState(id, state).subscribe((notes) => {
      this._notes$.next(notes);
    });
  }

  // TODO: 結果返したほうがいい？
  updateNote(id: NoteID, data: UpdateNote): void {
    noteRepostiry.updateNote(id, data).subscribe((notes) => {
      this._notes$.next(notes);
    });
  }
}
