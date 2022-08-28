import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-sensor-settings',
  templateUrl: './show-sensor-settings.component.html',
  styleUrls: ['./show-sensor-settings.component.css']
})
export class ShowSensorSettingsComponent implements OnInit {

  constructor(private service:SharedService, private data:DataService) { }

  SensorList:any =[];
  ngOnInit(): void {
    this.refreshSensorList({"UserId": 1});
  }

  refreshSensorList(item: any){
    var val = item.UserId;
    this.service.getSensorList(val).subscribe(data=>
      {
        this.SensorList=data;
      })
  }
}
