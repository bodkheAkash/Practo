import { Component,OnDestroy } from '@angular/core';
import { ApiResponseModel, Hospital } from '../../core/classes/Hospital.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../core/services/hospital.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-hospital',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent {

  public hospitalObj:Hospital=new Hospital();
  private subscriptions:Subscription[] = [];

  constructor(private http:HospitalService){}

  onRegister(){
    this.http.registerHospital(this.hospitalObj).subscribe((res:ApiResponseModel)=>{
      if(res.result){
        alert("Registration successfully")
        this.hospitalObj = new Hospital(); 
      }
      else{
        alert(res.message)
      }
    },error=>{
      alert(JSON.stringify(error))
    })
  }

}
