import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dashboard',
  templateUrl: './show-dashboard.component.html',
  styleUrls: ['./show-dashboard.component.css']
})
export class ShowDashboardComponent implements OnInit {

  constructor(private service:SharedService) { }

  SensorList:any=[];

  ngOnInit(): void {
    this.refreshSensorList({"UserId": 1}); //change this later to pull user id from login page
  }

  refreshSensorList(item: any){
    var val = item.UserId;
    this.service.getSensorList(val).subscribe(data=>
      {
        this.SensorList=data;
      })
  }
}
