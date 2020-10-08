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

  constructor() {}

  get notes$(): Observable<NoteAndState[]> {
    return this._notes$.asObservable();
  }

  fetchNotes(): void {
    noteRepostiry.fetchNotes().subscribe((notes) => {
      this._notes$.next(notes);
    });
  }

  createNote(): NoteID {
    return noteRepostiry.createNote();
  }

  getNoteById(id: NoteID): NoteAndState | undefined {
    return noteRepostiry.getNoteById(id);
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
