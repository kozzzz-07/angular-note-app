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
      id: 'b',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: 'c',
      title: 'ピヨ',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
    },
  ];

  createNote(): Observable<Note[]> {
    const note: Note = {
      id: this.genatreteId(),
      createAt: new Date().toISOString(),
    };
    this.notes = [{ ...note }, ...this.notes];
    return of(this.notes);
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

  getNoteById(id: NoteID): Note | undefined {
    return this.notes.find((note: { id: NoteID }) => note.id === id);
  }

  private deleteNote() {}

  private genatreteId(): NoteID {
    return new Date().getTime().toString(36);
  }
}

export const noteRepostiry = new NoteRepostiry();
