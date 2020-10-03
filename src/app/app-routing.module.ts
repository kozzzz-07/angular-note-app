import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';

const routes: Routes = [{
  path: '',
  component: MainNavComponent,
  children: [
    { path: '', redirectTo: '/note', pathMatch: 'full' },
    {
      path: 'note',
      loadChildren: () =>
        import('./feature-modules/note/note.module').then(
          m => m.NoteModule,
        ),
    },
    { path: '**', redirectTo: '/note' },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
