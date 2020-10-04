import { NoteID } from 'src/app/models/note/note.model';
// 一旦オンメモリでの管理
// TODO: local storage化
// TODO: DB使用

import { Note } from '../models/note/note.model';
import { Observable, from, of } from 'rxjs';

class NoteRepostiry {
  private notes: Note[] = [
    {
      id: 'a',
      title: 'aほげほげ',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: 'a',
      title: 'ほげほげ',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
  ];

  createNote(note: Note): void {
    this.notes = [{ ...note }, ...this.notes];
  }

  updateNote(note: Note): boolean {
    // ここでやっていいのか？
    if (this.notes.some((_note: { id: NoteID }) => _note.id !== note.id)) {
      return false;
    }
    this.notes = [{ ...note }, ...this.notes];
    return true;
  }

  fetchNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  fetchNote(): Observable<Note> {
    return from(this.notes);
  }

  private deleteNote() {}
}

export const noteRepostiry = new NoteRepostiry();
