import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoteRoutingModule } from './note-routing.module';
import { NotePageComponent } from './note.page';
import { NoteContainerComponent } from '../../containers/note/note.container';
import { NoteListComponent } from '../../presentations/note-list/note-list.component';
import { NoteListItemComponent } from '../../presentations/note-list-item/note-list-item.component';
import { NoteDetailComponent } from '../../presentations/note-detail/note-detail.component';

@NgModule({
  declarations: [
    NoteDetailComponent,
    NotePageComponent,
    NoteContainerComponent,
    NoteListComponent,
    NoteDetailComponent,
    NoteListItemComponent,
  ],
  imports: [CommonModule, NoteRoutingModule, FormsModule],
})
export class NoteModule {}
