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
    this.service.updateAlertProfile(updatedProfile).subscribe(res =>{
      alert(res.toString())
    });
  }
}
