import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dashboard',
  templateUrl: './add-edit-dashboard.component.html',
  styleUrls: ['./add-edit-dashboard.component.css']
})
export class AddEditDashboardComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() reading:any;
  ReadingId:string="";
  ReadingValue:string="";
  ReadTime:string="";
  SensorId:string="";

  ngOnInit(): void {
    this.ReadingId=this.reading.ReadingId;
    this.ReadingValue=this.reading.ReadingValue;
    this.ReadTime=this.reading.ReadTime;
    this.SensorId= this.reading.SnsorId;
  }

  updateReading(){
    var updatedReading = {
      ReadingId:this.ReadingId,
      ReadingValue:this.ReadingValue,
      ReadTime:this.ReadTime,
      SensorId:this.SensorId
    }
    this.service.updateReading(updatedReading).subscribe(resp =>{
      alert(resp.toString())
    });
  }

}
