export type Note = {
  id: NoteID;
  title?: string;
  excerpt?: string;
  detail?: string;
  createAt: string;
  updateAt?: string;
};

export type NoteID = string;
