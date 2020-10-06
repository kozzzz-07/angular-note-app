import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NotePageComponent } from './components/pages/note/note.page'; // 名前のバッティングには命名規則で回避するか、モジュールに別名をつけることで回避できる
import { NoteListComponent as NoteListContainerComponent } from './components/containers/note-list/note-list.component';
import { NoteDetailComponent as NoteDetailContainerComponent } from './components/containers/note-detail/note-detail.component';
import { NoteListComponent } from './components/presentations/note-list/note-list.component';
import { NoteDetailComponent } from './components/presentations/note-detail/note-detail.component';
import { NoteListItemComponent } from './components/presentations/note-list-item/note-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotePageComponent,
    NoteListContainerComponent,
    NoteDetailContainerComponent,
    NoteListComponent,
    NoteDetailComponent,
    NoteListItemComponent,
  ],
  imports: [CommonModule, NoteRoutingModule, SharedModule, FormsModule],
})
export class NoteModule {}
