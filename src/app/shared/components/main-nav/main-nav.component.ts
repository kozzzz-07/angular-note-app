import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  screenHeight = 0;

  constructor() {}

  ngOnInit(): void {
    this.getScreenHeightSize();
  }

  // TODO:Directve化 (パフォーマンスも悪いので本来であればrxjsとかでやる)
  @HostListener('window:resize')
  getScreenHeightSize(): void {
    const innerHeight = window.innerHeight;
    if (this.screenHeight !== innerHeight) {
      this.screenHeight = window.innerHeight;
    }
  }
}
