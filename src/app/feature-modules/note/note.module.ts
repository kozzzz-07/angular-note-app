import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteRoutingModule } from './note-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NoteRoutingModule, SharedModule],
})
export class NoteModule {}
