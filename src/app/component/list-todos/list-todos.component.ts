import { Component, OnInit } from '@angular/core';
import { CandidateServiceService } from '../../service/data/candidate-service.service';
import * as XLSX from 'xlsx';

export class Todo {
  constructor(
    public id:number,
    public description:string,
    public done: boolean,
    public targetDate:Date
  ){}
}

export class Candidate {
  constructor(
public  recId:number,
public  candidateNo:number,
public  candidateName:string,
public  candidateScore:number,
public  candidateRank:number,
public  updateDate:Date
){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {
  candidates: Candidate[] = [];
  fileName = 'CandidateList.xlsx';

  constructor(private candidateServiceService: CandidateServiceService) {}

  ngOnInit() {
    this.loadCandidates();
  }

  loadCandidates() {
    this.candidateServiceService.getAllCandidate().subscribe(
      response => {
        this.candidates = response;
      },
      error => {
        console.error('Error fetching candidates:', error);
      }
    );
  }

  exportCandidatesAsExcel() {
    const data: any[] = [];
    // Pushing headers
    data.push(['Record ID', 'Candidate Number', 'Candidate Name', 'Score', 'Rank', 'Update Date']);
    // Pushing candidate data
    this.candidates.forEach(candidate => {
      data.push([candidate.recId, candidate.candidateNo, candidate.candidateName, candidate.candidateScore, candidate.candidateRank, candidate.updateDate]);
    });
    // Create workbook and worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Candidates');

    // Save to file
    XLSX.writeFile(wb, this.fileName);
  }
}

