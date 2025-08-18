import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding, faHome, faListNumeric, faMessage, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [FontAwesomeModule, RouterLink]
})
export class HeaderComponent {
  faHome=faHome
  faChat=faMessage
  faUniversity=faBuilding
  faProfil=faUser
  faLogout=faSignOut
  fapoint=faListNumeric

  role:string=""

  constructor(private service:AuthService,private router:Router){
    service.GetRole().subscribe(role=>{
      this.role=role.role
    })
  }
  logout(){
    this.service.Logout()
    this.router.navigate(["/login"])

  }
}
