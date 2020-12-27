export type Note = {
  id: NoteID;
  title: string;
  excerpt?: string;
  detail: string;
  createAt: string;
  updateAt?: string;
};

export type NoteState = {
  isSelected: boolean;
};

export type NoteAndState = Note & NoteState;

export type NoteID = string;

export type UpdateNote = Partial<
  Pick<Note, 'title' | 'detail' | 'excerpt'>
>;
