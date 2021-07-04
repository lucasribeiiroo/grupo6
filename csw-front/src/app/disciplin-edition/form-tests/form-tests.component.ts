import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-tests',
  templateUrl: './form-tests.component.html',
  styleUrls: ['./form-tests.component.css']
})
export class FormTestsComponent implements OnInit {

  item: any;

  constructor(protected router: Router) {
    this.item = this.router.getCurrentNavigation().extras.state.item;
   }

  ngOnInit(): void {
  }

}
