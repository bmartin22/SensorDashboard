import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { SharedService } from 'src/app/shared.service';
import { GlobalVariables } from 'src/app/dashboard/dashboard.component';

@Component({
  selector: 'app-show-sensor-settings',
  templateUrl: './show-sensor-settings.component.html',
  styleUrls: ['./show-sensor-settings.component.css']
})
export class ShowSensorSettingsComponent implements OnInit {

  constructor(private service:SharedService) { }

  SensorList:any =[];

  ModalTitle:string="";
  ActivateSensorComp:boolean=false;
  sense:any;

  ngOnInit(): void {
    this.refreshSensorList({"UserId": GlobalVariables.sessionUserId});
  }

  refreshSensorList(item: any){
    var val = item.UserId;
    this.service.getSensorList(val).subscribe(data=>
      {
        this.SensorList=data;
      })
  }

  addSensorClick(){
    this.sense={
      SensorId:0,
      SensorName:"",
      SensorLocation:"",
      SetupDate:"",
      SensorUnit:"",
      AlertProfileId:"",
      UserId:GlobalVariables.sessionUserId
    }
    this.ModalTitle = "Add Sensor";
    this.ActivateSensorComp = true;

  }

  editSensorClick(item:any){
    this.sense=item;
    this.ModalTitle = "Modify Sensor";
    this.ActivateSensorComp = true;
  }

  deleteSensorClick(item:any){
    var val = item.SensorId;
    if(confirm ('Are you sure you want to delete Sensor "' + item.SensorName + '" (Sensor ID: ' + val + ')?')){
      this.service.deleteAlertProfile(val).subscribe(resp => {
        alert(resp.toString());
        this.refreshSensorList({"UserId": GlobalVariables.sessionUserId});
      })
    }
  }

  closeClick(){
    this.ActivateSensorComp = false;
    this.refreshSensorList({"UserId": GlobalVariables.sessionUserId});
  }

}
