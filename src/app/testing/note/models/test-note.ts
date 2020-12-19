import { Note, NoteAndState } from 'src/app/models/note/note.model';

// new Date(2020, 10, 20).toISOString() -> "2020-11-19T15:00:00.000Z"
export function getTestNotes(): NoteAndState[] {
  return [
    {
      id: '1',
      title: 'title',
      createAt: '2020-11-19T15:00:00.000Z',
      detail: 'abcdefg',
      excerpt:
        'abcdefg',
      isSelected: true
    },
    {
      id: '2',
      title: 'title2',
      createAt: '2020-11-20T15:00:00.000Z',
      detail: 'abcdefg',
      excerpt:
        'abcdefg',
      isSelected: false
    },
  ];
}



