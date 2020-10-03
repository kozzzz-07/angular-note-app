import { NoteDetailComponent } from './components/presentations/note-detail/note-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotePageComponent } from './components/pages/note/note.page';

const routes: Routes = [
  {
    path: '',
    component: NotePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule {}
