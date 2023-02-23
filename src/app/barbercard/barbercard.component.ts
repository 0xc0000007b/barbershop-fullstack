import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-barbercard',
  templateUrl: './barbercard.component.html',
  styleUrls: ['./barbercard.component.sass']
})
export class BarbercardComponent {
 @Input()
    public img: string = ''
}
