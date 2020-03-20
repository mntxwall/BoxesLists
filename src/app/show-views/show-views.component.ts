import { Component, OnInit } from '@angular/core';

interface OptionChoice {
  value: boolean,
  viewValue: string

}
@Component({
  selector: 'app-show-views',
  templateUrl: './show-views.component.html',
  styleUrls: ['./show-views.component.css']
})
export class ShowViewsComponent implements OnInit {

  constructor() { }

  checked_1 = false;
  indeterminate_1 = false;
  others = false;

  useChoice: string = "";
  choices: OptionChoice[] = [
    {value: true, viewValue:'会'},
    {value: false, viewValue: '不会'}
    ];

  ngOnInit(): void {
  }

  saveSetting(form) {
    console.log('This is table sbmit');
    console.log(form);
  }

}
