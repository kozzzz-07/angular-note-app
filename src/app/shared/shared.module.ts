import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [MainNavComponent, ButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent],
})
export class SharedModule {}
