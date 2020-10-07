import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoteRoutingModule } from './note-routing.module';
import { NoteDetailComponent } from '../../presentations/note-detail/note-detail.component';

@NgModule({
  declarations: [NoteDetailComponent],
  imports: [CommonModule, NoteRoutingModule, FormsModule],
})
export class NoteModule {}
