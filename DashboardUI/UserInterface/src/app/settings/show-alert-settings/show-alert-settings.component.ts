import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-alert-settings',
  templateUrl: './show-alert-settings.component.html',
  styleUrls: ['./show-alert-settings.component.css']
})
export class ShowAlertSettingsComponent implements OnInit {

  constructor(private service:SharedService) { }

  AlertProfileList:any = [];

  ModalTitle:string="";
  ActivateAddEditAlertSettingsComp:boolean=false;
  alertProf:any;

  ngOnInit(): void {
    this.refreshAlertProfileList({"UserId":1});
  }

  refreshAlertProfileList(item:any){
    var val = item.userId;
    this.service.getAlertProfileList(val).subscribe(data=>
      {
        this.AlertProfileList=data;
      })
  }

  addClick(){
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

  editClick(item:any){
    this.alertProf=item;
    this.ModalTitle = "Modify Alert Profile";
    this.ActivateAddEditAlertSettingsComp = true;
  }

  closeClick(){
    this.ActivateAddEditAlertSettingsComp = false;
    this.refreshAlertProfileList({"UserId":1});
  }
}
