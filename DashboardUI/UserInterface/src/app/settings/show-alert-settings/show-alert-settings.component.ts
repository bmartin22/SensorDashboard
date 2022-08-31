import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { SharedService } from 'src/app/shared.service';
import { GlobalVariables } from 'src/app/dashboard/dashboard.component';

@Component({
  selector: 'app-show-alert-settings',
  templateUrl: './show-alert-settings.component.html',
  styleUrls: ['./show-alert-settings.component.css']
})
export class ShowAlertSettingsComponent implements OnInit {

  constructor(private service:SharedService, private data:DataService) { }

  AlertProfileList:any = [];
  SensorList:any = [];

  ModalTitle:string="";
  ActivateAddEditAlertSettingsComp:boolean=false;
  alertProf:any;

  ngOnInit(): void {
    this.refreshSensorList({"UserId": GlobalVariables.sessionUserId})
  }

  addSensorClick(){
    this.alertProf={
      AlertProfileId:0,
      AlertProfileName:"",
      HighThreshold:"",
      TargetValue:"",
      LowThreshold:"",
      AlertEmail:""
    }
    this.ModalTitle = "Add Alert Profile";
    this.ActivateAddEditAlertSettingsComp = true;
  }

  //get data on all sensors
  refreshSensorList(item: any){
    var val = item.UserId;
    this.service.getSensorList(val).subscribe(data=>
      {
        this.SensorList=data;
        console.log(this.SensorList);
        this.refreshAlertProfileList();
      })
  }

  editClick(item:any){
    this.alertProf=item;
    this.ModalTitle = "Modify Alert Profile";
    this.ActivateAddEditAlertSettingsComp = true;
  }

  closeClick(){
    this.ActivateAddEditAlertSettingsComp = false;
    //this.refreshAlertProfileList({"UserId":1});
    this.refreshAlertProfileList();
  }

  refreshAlertProfileList(){
    var AlertProfileIds:any = [];
    console.log(this.SensorList);
    this.SensorList.forEach(function(sensorItem:any){
      AlertProfileIds.push(sensorItem.AlertProfileId);
    });
    console.log(AlertProfileIds);
    this.service.getAlertProfileList(AlertProfileIds).subscribe(data=>
      {
        this.AlertProfileList=data;
        console.log(this.AlertProfileList);
      })
  }

}
