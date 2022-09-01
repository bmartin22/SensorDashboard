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
  ActivateAddEditAlertSettings:boolean=false;
  alertProf:any;

  ngOnInit(): void {
    this.refreshSensorList({"UserId": GlobalVariables.sessionUserId})
  }

  addAlertProfileClick(){
    console.log("button pressed");
    this.alertProf={
      AlertProfileId:0,
      AlertProfileName:"",
      HighThreshold:"",
      TargetValue:"",
      LowThreshold:"",
      AlertEmail:""
    }
    this.ModalTitle = "Add Alert Profile";
    this.ActivateAddEditAlertSettings = true;
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

  editAlertProfileClick(item:any){
    this.alertProf=item;
    this.ModalTitle = "Modify Alert Profile";
    this.ActivateAddEditAlertSettings = true;
  }

  deleteAlertProfileClick(item:any){
    var val = item.AlertProfileId;
    if(confirm ('Are you sure you want to delete alert profile "' + item.AlertProfileName + '" (Profile ID: ' + val + ')?')){
      this.service.deleteAlertProfile(val).subscribe(resp => {
        alert(resp.toString());
        this.refreshAlertProfileList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditAlertSettings = false;
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
