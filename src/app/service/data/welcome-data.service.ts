import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  excuteHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    console.log("Excecuet Hello World Beans Service");
  }
}
