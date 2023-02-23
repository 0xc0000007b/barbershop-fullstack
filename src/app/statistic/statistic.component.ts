import {Component, Output} from '@angular/core';
import _default from "chart.js/dist/plugins/plugin.tooltip";
import animations = _default.defaults.animations;
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.sass'],

})
export class StatisticComponent {
  @Output() public percent: number = 0


}
