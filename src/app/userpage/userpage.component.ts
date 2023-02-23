import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.sass'],
    animations:[
      trigger('showing', [
          state('default', style({ height: 200})),
          state('hide', style({height: 0})),
          transition('default<=>hide', animate(500))
      ])
  ]
})
export class UserpageComponent {
    public isShow: string = 'hide'
    setState(): void{
        this.isShow = this.isShow === 'hide' ? 'default' : 'hide'
    }
}
