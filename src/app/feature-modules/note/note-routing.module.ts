import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// page単位の遅延ロード
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/pages/note/note.module').then((m) => m.NoteModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule {}
