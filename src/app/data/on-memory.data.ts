import {
  NoteID,
  UpdateNote,
  NoteAndState,
  NoteState,
} from 'src/app/models/note/note.model';
// 一旦オンメモリでの管理
// TODO: local storage化
// TODO: DB使用

import { Observable, from, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoteRepository {
  private notes: NoteAndState[] = [];

  // TODO:くるくるつける？

  createNote(): NoteID {
    const note: NoteAndState = {
      id: this.generateId(),
      title: '',
      detail: '',
      createAt: this.getISO(),
      isSelected: false,
    };

    // Stateの初期化
    const notes = this.notes.map((_note) => ({ ..._note, isSelected: false }));

    this.notes = [{ ...note }, ...notes];
    return note.id;
  }

  updateNote(id: NoteID, data: UpdateNote): Observable<NoteAndState[]> {
    if (data.detail) {
      const excerpt =
        data.detail.length < 50 ? data.detail : data.detail.slice(20);
      data = {
        ...data,
        excerpt,
      };
    } else {
      data = {
        ...data,
      };
    }

    // イミュータブルに扱いたいけど、もっといいやり方あるかな？
    const note = this.notes.find(
      (_note: { id: NoteID }) => _note.id === id
    ) as NoteAndState;
    const notes = this.notes.filter((_note: { id: NoteID }) => _note.id !== id);
    // 更新したら先頭に持っていく
    this.notes = [{ ...note, ...{ ...data, updateAt: this.getISO() } }, ...notes];
    return of(this.notes);
  }

  updateNoteState(id: NoteID, state: NoteState): Observable<NoteAndState[]> {
    const defaultState: NoteState = { isSelected: false };

    const notes = this.notes.map<NoteAndState>((note) =>
      note.id === id ? { ...note, ...state } : { ...note, ...defaultState }
    );
    this.notes = notes;
    return of(this.notes);
  }

  fetchNotes(): Observable<NoteAndState[]> {
    return of(this.notes);
  }

  private fetchNote(): Observable<NoteAndState> {
    return from(this.notes);
  }

  getNoteById(id: NoteID): Observable<NoteAndState | undefined> {
    return of(this.notes.find((note: { id: NoteID }) => note.id === id));
  }

  private deleteNote() {}

  private generateId(): NoteID {
    return new Date().getTime().toString(36);
  }

  private getISO(): string {
    return new Date().toISOString();
  }

  // TODO: ソート
  private compareDate() {}
}

// export const noteRepository = new NoteRepository();
