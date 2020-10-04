import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDetailComponent } from '../../containers/note-detail/note-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NoteDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule {}
