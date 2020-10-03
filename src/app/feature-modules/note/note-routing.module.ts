import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotePageComponent } from './components/pages/note/note.page';

const routes: Routes = [
  {
    path: '',
    component: NotePageComponent,
    children: [
      {
        // detail
        path: ':id',
        loadChildren: () =>
          import('./components/pages/note/note.module').then(
            (m) => m.NoteModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule {}
