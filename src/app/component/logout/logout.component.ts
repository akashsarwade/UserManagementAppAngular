import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../../service/hardcode-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(public hardcodeAuthenticationService: HardcodeAuthenticationService){}
  ngOnInit() {
      this.hardcodeAuthenticationService.logout();
  }

}
