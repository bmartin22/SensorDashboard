import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sensor-settings',
  templateUrl: './add-edit-sensor-settings.component.html',
  styleUrls: ['./add-edit-sensor-settings.component.css']
})
export class AddEditSensorSettingsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() sense:any;
  SensorId:string="";
  SensorName:string="";
  SensorLocation:string="";
  SetupDate:string="";
  SensorUnit:string="";
  USerId:string="";
  AlertProfileId:string="";
  
  ngOnInit(): void {
  this.SensorId=this.sense.SensorId;
  this.SensorName=this.sense.SensorName;
  this.SensorLocation=this.sense.SensorLocation;
  this.SetupDate=this.sense.SetupDate;
  this.SensorUnit=this.sense.SensorUnit;
  this.USerId=this.sense.USerId;
  this.AlertProfileId=this.sense.AlertProfileId;
  }

  addSensor(){
    var newSensor={
      SensorId:this.SensorId,
      SensorName:this.SensorName,
      SensorLocation:this.SensorLocation,
      SetupDate:this.SetupDate,
      SensorUnit:this.SensorUnit,
      USerId:this.USerId,
      AlertProfileId:this.AlertProfileId,
    }
    this.service.addSensor(newSensor).subscribe(resp=>{
      alert(resp.toString)
    });
  }

  updateSensor(){
    var updatedSensor = {
      SensorId:this.SensorId,
      SensorName:this.SensorName,
      SensorLocation:this.SensorLocation,
      SetupDate:this.SetupDate,
      SensorUnit:this.SensorUnit,
      USerId:this.USerId,
      AlertProfileId:this.AlertProfileId,
    }
    this.service.updateSensorList(updatedSensor).subscribe(res => {
      alert(res.toString())
    });
  }

}
