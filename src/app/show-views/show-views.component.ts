import { Component, OnInit } from '@angular/core';
import {BoxServiceService} from '../box-service.service';

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

  constructor(private boxService: BoxServiceService) { }

  relationship = false;
  trajectory = false;
  others = false;

  useChoice = '';
  inputValue = '';
  choices: OptionChoice[] = [
    {value: true, viewValue: '会'},
    {value: false, viewValue: '不会'}
    ];

  ngOnInit(): void {
  }

  saveSetting(form) {
    console.log(form);
    this.boxService.postBoxData(form).subscribe(data => console.log(data));
  }

}
