import { Component, OnInit } from '@angular/core';
import { NomocalcService } from '../services/nomocalc.service';
import { OutputData, defaultOutputData } from '../model/output-data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public result: OutputData;

  constructor(public nomocalc: NomocalcService,
              private router: Router) {
    this.result = defaultOutputData;
    this.nomocalc.getData().subscribe({
      next: (data: OutputData) => {
        console.log(data);
        this.result = { ... data};
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {

      }
    });
  }

  ngOnInit() {
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

}
