import { NoteState } from './../models/note/note.model';
import {
  NoteID,
  UpdateNote,
  NoteAndState,
} from 'src/app/models/note/note.model';
// 一旦オンメモリでの管理
// TODO: local storage化
// TODO: DB使用

import { Observable, from, of } from 'rxjs';

class NoteRepostiry {
  private notes: NoteAndState[] = [
    {
      id: 'a',
      title: 'aほげほげ',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      detail: 'aaaaaaaaaaaa',
      isSelected: true,
    },
    {
      id: 'b',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      detail: 'iiiiiiiii',
      isSelected: false,
    },
    {
      id: 'c',
      title: 'ピヨ',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      detail: 'uuuuuuu',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
    {
      id: '',
      title: 'ふがふが',
      createAt: '2020/04/01',
      excerpt:
        'あああああああああああああああああああああああああああああああああああ',
      isSelected: false,
    },
  ];

  // TODO:くるくるつける？

  createNote(): Observable<NoteAndState[]> {
    const note: NoteAndState = {
      id: this.genatreteId(),
      createAt: new Date().toISOString(),
      isSelected: true,
    };

    const notes = this.notes.map((_note) => ({ ..._note, isSelected: false }));
    this.notes = [{ ...note }, ...notes];
    return of(this.notes);
  }

  updateNote(id: NoteID, data: UpdateNote): Observable<NoteAndState[]> {
    // イミュータブルに扱いたいけど、もっといいやり方あるかな？
    const note = this.notes.find(
      (_note: { id: NoteID }) => _note.id === id
    ) as NoteAndState;
    const notes = this.notes.filter((_note: { id: NoteID }) => _note.id !== id);
    // 更新したら先頭に持っていく
    this.notes = [{ ...note, ...data }, ...notes];

    return of(this.notes);
  }

  updateNoteState(id: NoteID, state: NoteState): Observable<NoteAndState[]> {
    const notes = this.notes.map<NoteAndState>((note) =>
      note.id === id
        ? { ...note, ...state }
        : { ...note, ...{ isSelected: false } }
    );
    this.notes = notes;

    return of(this.notes);
  }

  fetchNotes(): Observable<NoteAndState[]> {
    return of(this.notes);
  }

  fetchNote(): Observable<NoteAndState> {
    return from(this.notes);
  }

  getNoteById(id: NoteID): NoteAndState | undefined {
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
