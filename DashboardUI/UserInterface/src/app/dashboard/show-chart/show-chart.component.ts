import { Component, OnInit} from '@angular/core';
import { DataService } from "../../data.service";
import 'chartjs-adapter-moment';
import { Chart, LinearScale, BarController, LineController, CategoryScale, BarElement, LineElement, PointElement, TimeScale } from 'chart.js';

@Component({
  selector: 'app-show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.css']
})



export class ShowChartComponent implements OnInit {
  
  constructor(private data:DataService) { }

  chartData:any=[];
  chartTimes:any=[];
  chartVals:any=[];

  ngOnInit(): void {
    this.data.currentChartData.subscribe( data => {
      this.extractDataPoints(data);
    });
  }

  extractDataPoints(newData:any){
    var newTimes:any = [];
    var newVals:any = [];
    newData.forEach(function(chartItem:any){
      //let epochTime: number = Date.parse(chartItem.ReadTime);
      newTimes.push(chartItem.ReadTime);
      newVals.push(parseFloat(chartItem.ReadingValue));
    })
    this.drawChart(newTimes, newVals);
  }

  drawChart(labelData:any, dataData:any){

    Chart.register(LinearScale, BarController, LineController, CategoryScale, BarElement, LineElement, PointElement, TimeScale);
    if(Chart.getChart("SensorChart") != undefined){
      Chart.getChart("SensorChart")?.destroy();
    }
    var myChart = new Chart("SensorChart", {
      type: 'line',
      data: {
          labels: labelData,
          datasets: [{
              data: dataData,
          }]
      },
      options: {
          scales: {
              x: {},
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  }
}
