import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiResponseModel, Hospital, User } from './core/classes/Hospital.model';
import { FormsModule } from '@angular/forms';
import { HospitalService } from './core/services/hospital.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practo';
  userObj:User=new User();
  loggedHospitalData:Hospital=new Hospital();
  private http=inject(HospitalService);
  
  constructor(){
    const loggedData=localStorage.getItem('practoLogin');
    if(loggedData!=null){
      this.loggedHospitalData=JSON.parse(loggedData)
    }

  }

  onLogin(){
    this.http.login(this.userObj).subscribe((res:ApiResponseModel)=>{
      if(res.result){
        this.loggedHospitalData=res.data
        localStorage.setItem('practoLogin',JSON.stringify(res.data))
        document.getElementById('modal')?.click();
        this.userObj=new User();
      }
      else
        alert(res.message)
    },error=>{alert('Something went wrong')})
  }

  logOff(){
    localStorage.removeItem('practoLogin')
    this.loggedHospitalData=new Hospital();
  }
}
