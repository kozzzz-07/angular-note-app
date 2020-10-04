import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from 'src/app/models/note/note.model';
import { noteRepostiry } from 'src/app/data/on-memory.data';
import { map } from 'rxjs/operators';

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
    noteRepostiry.fetchNotes().subscribe((note) => {
      this._notes$.next(note);
    });
  }
}
