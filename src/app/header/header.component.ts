import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations:[
      trigger('showing', [
          state('default', style({display: 'block', opacity: 1})),
          state('hide', style({display: 'none', opacity: 0})),
          transition('default<=>hide', animate(300))
      ])
  ]
})
export class HeaderComponent {
  public isShow:string = 'hide';
  setState(): void  {
    this.isShow = this.isShow === 'default' ? 'hide'  : 'default'

  }
}
