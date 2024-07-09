import { Component } from '@angular/core';
import { NewHospitalComponent } from '../new-hospital/new-hospital.component';
import { Hospital } from '../../core/classes/Hospital.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewHospitalComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  loggedHospital:Hospital=new Hospital();
  constructor(){
    const data=localStorage.getItem('practoLogin')
    if(data!=null){
       this.loggedHospital=JSON.parse(data);
    }
  }
}
