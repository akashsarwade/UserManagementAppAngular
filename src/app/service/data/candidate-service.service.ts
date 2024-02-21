import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from '../../component/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {

  constructor( private http:HttpClient) {
   }


   getAllCandidate(){
    return this.http.get<Candidate[]>("http://localhost:8080/candidates/getAll");
   }

}
