import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practo';

  showLogin(){
    debugger;
    const model=document.getElementById('modal');
    if(model!=null)
      model.style.display='block';
  }
}
