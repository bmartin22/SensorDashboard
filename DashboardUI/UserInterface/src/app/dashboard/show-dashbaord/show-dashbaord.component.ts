import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dashbaord',
  templateUrl: './show-dashbaord.component.html',
  styleUrls: ['./show-dashbaord.component.css']
})
export class ShowDashbaordComponent implements OnInit {

  constructor(private service:SharedService) { }

  SensorList:any=[];
  ngOnInit(): void {
    this.refreshSensorList();
  }

  refreshSensorList(){
    this.service.getSensorList().subscribe(data=>
      {
        this.SensorList=data;
      });
  }
}
