import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InputData, defaultInputData } from '../model/input-data';
import { NomocalcService } from '../services/nomocalc.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public data: InputData;

  constructor(public nomocalc: NomocalcService,
              private router: Router) {
    this.data = defaultInputData;
  }

  ngOnInit() {
  }

  public sendRequest() {
    this.nomocalc.setData({... this.data });
    this.router.navigateByUrl('/results');
  }

}
