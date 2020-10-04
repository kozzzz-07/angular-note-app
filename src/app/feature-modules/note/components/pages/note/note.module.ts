import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteDetailComponent as NoteDetailContainerComponent } from '../../containers/note-detail/note-detail.component';
import { NoteDetailComponent } from '../../presentations/note-detail/note-detail.component';

@NgModule({
  declarations: [NoteDetailComponent, NoteDetailContainerComponent],
  imports: [CommonModule, NoteRoutingModule],
})
export class NoteModule {}
