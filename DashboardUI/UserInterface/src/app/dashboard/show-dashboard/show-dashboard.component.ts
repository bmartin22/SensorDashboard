import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dashboard',
  templateUrl: './show-dashboard.component.html',
  styleUrls: ['./show-dashboard.component.css']
})



export class ShowDashboardComponent implements OnInit {

  constructor(private service:SharedService, private data:DataService) { }

  SensorList:any=[];
  ReadingList:any=[];
  chartData:any=[];

  ngOnInit(): void {
    this.refreshSensorList({"UserId": 1}); //change this later to pull user id from login page
    this.data.currentChartData.subscribe( chartData => this.chartData = chartData )
  }

  refreshSensorList(item: any){
    var val = item.UserId;
    this.service.getSensorList(val).subscribe(data=>
      {
        this.SensorList=data;
        this.refreshReadingList(data);
      })
    
  }

  refreshReadingList(SensorDump:any){
    console.log(this.SensorList);
    var SensorIds:any = [];
    SensorDump.forEach(function(sensorItem:any){
      SensorIds.push(sensorItem.SensorId);
    });
    this.service.getReadingList(SensorIds).subscribe(data =>{
      this.ReadingList=data;
      this.updateChartData(this.ReadingList);
    });
  }

  updateChartData(newChartData:any){
    newChartData = this.ReadingList;
    this.data.changeChartData(newChartData);
  }
}
