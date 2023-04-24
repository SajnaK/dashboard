import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
//give chart configure data
chart: {
  type: 'pie',
  options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
  }
},
title: {
  text: 'Average Student Admission 2022-23',
  align: 'left'
},

accessibility: {
  point: {
      valueSuffix: '%'
  }
},
tooltip: {
  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
plotOptions: {
  pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      }
  }
},
series: [{
  type: 'pie',
  name: 'Count',
  data: [
      ['MEARN', 23],
      ['PYTHON', 18],
      /*{
          name: 'Xiaomi',
          y: 12,
          sliced: true,
          selected: true
      },*/
      ['ASP.NET', 9],
      ['TESTING', 8],
      ['FLUTTER', 30],
      ['BIG DATA', 30]
  ]
}]
    }
  }
}
