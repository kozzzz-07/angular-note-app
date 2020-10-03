import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
