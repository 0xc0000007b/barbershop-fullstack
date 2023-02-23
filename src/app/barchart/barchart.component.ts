import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from "chart.js/auto";
import {defaults} from "chart.js";
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.sass']
})
export class BarchartComponent implements OnInit{

  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    Chart.defaults.borderColor = '#fff'
    Chart.defaults.scales.linear.ticks.display = false
    Chart.defaults.plugins.legend.display = false
    Chart.defaults.datasets.bar.barPercentage = 1
    Chart.defaults.datasets.bar.categoryPercentage = .99
    this.chart = new Chart("BarChart", {
      type: 'bar',
      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12'
								 ],
	       datasets: [
          {
            label: "счастливые посетители",
            data: ['870','950', '980', '79', '92',
								 '574', '573', '576'],
            backgroundColor: '#7dcd7e'
          },

        ]
      },
      options: {

        aspectRatio: 2.5,
      }
    });

    Chart.register(...registerables)
  }


}
