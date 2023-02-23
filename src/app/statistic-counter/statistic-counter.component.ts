import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-statistic-counter',
  templateUrl: './statistic-counter.component.html',
  styleUrls: ['./statistic-counter.component.sass']
})
export class StatisticCounterComponent {
  // @ts-ignore
  @Input() percent
}
