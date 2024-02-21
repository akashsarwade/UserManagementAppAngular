import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
welcomeMessageFromService: string | undefined;

  massage = 'Some welcome massage'
  name=''
  constructor(private route: ActivatedRoute,public welcomeDataService:WelcomeDataService){}

  getWelcomeMessageWithParameter() {
    console.log(this.welcomeDataService.excuteHelloWorldBeanService());
    this.welcomeDataService.excuteHelloWorldBeanService().subscribe(
      response => this.handleSuccessRespone(response),
      error => this.handleErrorRespone(error)
    );
    }
    handleSuccessRespone(response: any){
     this.welcomeMessageFromService=response
      //console.log(response);
      //alert(response)
    }
    handleErrorRespone(error:any)
    {
      this.welcomeMessageFromService =error.error.massage;
    }
  ngOnInit(): void {
   // console.log(this.massage)
   // console.log(this.route.snapshot.params['name'])
     this.name=this.route.snapshot.params['name'];
  }
}
