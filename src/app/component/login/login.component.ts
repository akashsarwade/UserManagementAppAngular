import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

username ='pradip'
password =''
errorMessage = 'Invalid Credentials'
invalidLogin = false;

constructor(private router: Router,
  public hardcodeAuthenticationService:HardcodeAuthenticationService){
}

doLogin(){
//console.log(this.username);
//if(this.username==='pradip123'){
  if(this.hardcodeAuthenticationService.authenticate(this.username,this.password)){
  this.router.navigate(['welcome',this.username]);
  this.invalidLogin = false;
}else {
  this.invalidLogin = true;
}
}
}
