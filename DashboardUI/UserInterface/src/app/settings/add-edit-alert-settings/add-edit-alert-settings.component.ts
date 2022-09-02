import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-alert-settings',
  templateUrl: './add-edit-alert-settings.component.html',
  styleUrls: ['./add-edit-alert-settings.component.css']
})
export class AddEditAlertSettingsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() alertProf:any;
  AlertProfileId:string="";
  AlertProfileName:string="";
  HighThreshold:string="";
  TargetValue:string="";
  LowThreshold:string="";
  AlertEmail:string="";


  ngOnInit(): void {
      this.AlertProfileId=this.alertProf.AlertProfileId;
      this.AlertProfileName=this.alertProf.AlertProfileName;
      this.HighThreshold=this.alertProf.HighThreshold;
      this.TargetValue=this.alertProf.TargetValue;
      this.LowThreshold=this.alertProf.LowThreshold;
      this.AlertEmail=this.alertProf.AlertEmail;
  }


  addAlertProfile(){
    var newProfile = {
      AlertProfileId:this.AlertProfileId,
      AlertProfileName:this.AlertProfileName,
      HighThreshold:this.HighThreshold,
      TargetValue:this.TargetValue,
      LowThreshold:this.LowThreshold,
      AlertEmail:this.AlertEmail
    }
    this.service.addAlertProfile(newProfile).subscribe(res=>{
      alert(res.toString())
    });
  }

  updateAlertProfile(){
    var updatedProfile = {
      AlertProfileId:this.AlertProfileId,
      AlertProfileName:this.AlertProfileName,
      HighThreshold:this.HighThreshold,
      TargetValue:this.TargetValue,
      LowThreshold:this.LowThreshold,
      AlertEmail:this.AlertEmail
    }
    this.service.updateAlertProfile(updatedProfile).subscribe(resp =>{
      alert(resp.toString())
    });
  }
}
