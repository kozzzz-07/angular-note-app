import { NoteID, UpdateNote } from 'src/app/models/note/note.model';
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
      detail: 'aaaaaaaaaaaa',
    },
    {
      id: 'b',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      detail: 'iiiiiiiii',
    },
    {
      id: 'c',
      title: 'ピヨ',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      detail: 'uuuuuuu',
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

  updateNote(id: NoteID, data: UpdateNote): Observable<Note[]> {
    // イミュータブルに扱いたいけど、もっといいやり方あるかな？
    const note = this.notes.find(
      (_note: { id: NoteID }) => _note.id === id
    ) as Note;
    const notes = this.notes.filter((_note: { id: NoteID }) => _note.id !== id);
    this.notes = [{ ...note, ...data }, ...notes];

    return of(this.notes);
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

  // TODO: ソート
  private compareDate() {}
}

export const noteRepostiry = new NoteRepostiry();
