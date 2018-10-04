import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-eager-component',
  templateUrl: './eager-component.component.html',
  styleUrls: ['./eager-component.component.css']
})
export class EagerComponentComponent implements OnInit {

  constructor(public service: AppService) { }

  ngOnInit() {

  }

}
