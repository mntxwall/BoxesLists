import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-views',
  templateUrl: './show-views.component.html',
  styleUrls: ['./show-views.component.css']
})
export class ShowViewsComponent implements OnInit {

  constructor() { }

  checked = false;
  indeterminate = false;

  ngOnInit(): void {
  }

  saveSetting(form) {
    console.log(form.value);
  }

}
