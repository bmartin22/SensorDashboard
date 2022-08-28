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
      })
      this.refreshReadingList();
  }

  refreshReadingList(){
    var SensorIds:any = [];
    this.SensorList.forEach(function(sensorItem:any){
      SensorIds.push(sensorItem.SensorId);
    });
    var readings:any;
    this.service.getReadingList(SensorIds).subscribe(data =>{
      readings=data;
      this.joinReadingSensors(readings);
    });
  }

  joinReadingSensors(latestReadingList:any){
    var latestSensorList = this.SensorList;
    latestReadingList.forEach(function(readingItem:any){
      var readSensorId = readingItem.SensorId;
      var readSensorName:any;
      //iterate over sensor objects to find the sensor with the same SensorId as the reading in scope
      latestSensorList.forEach(function(sensorItem:any){
        if (sensorItem.SensorId == readSensorId){
          readSensorName = sensorItem.SensorName;
          console.log(readSensorName);
          return;
        }
      });
      readingItem.SensorName = readSensorName;
    });
    this.ReadingList = latestReadingList;
    console.log(this.ReadingList);
    this.updateChartData();
  }

  updateChartData(){
    var newChartData = this.ReadingList;
    this.data.changeChartData(newChartData);
  }
}
