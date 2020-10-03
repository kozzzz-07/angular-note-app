export type Note = {
  id?: NoteID;
  createAt?: string;
  title?: string;
  excerpt?: string;
  detail?: string;
};

type NoteID = string;
