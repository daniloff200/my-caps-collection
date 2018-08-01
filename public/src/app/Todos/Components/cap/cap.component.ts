import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/pairwise';

// Import the DataService
import { DataService } from './../../Services/data.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { Cap } from '../../Model/cap';

@Component({
  selector: 'cap-component',
  templateUrl: './cap.component.html',
  styleUrls: ['./cap.component.css']
})
export class CapComponent implements OnInit {
  public capId: string;
  public  cap: Cap;

  constructor(private _dataService: DataService,  private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.capId =  this.activatedRoute.snapshot.params.id;
    this._dataService.getCap(this.capId)
      .subscribe(res => {
        this.cap = res.data;
      });
  }

}
