import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import * as moment from 'moment';

/**
 * moment(DATEFIN[2] + "-" + DATEFIN[1] + "-" + DATEFIN[0])
 */

const datesToTest = [
  '2020-09-01',
  '2020-09-23',
  '2020-08-07',
  '2020-08-23',
  '2020-07-23',
  '2019-07-01',
  '2019-01-01',
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    {
      name: 'Test 1',
      description: 'Description 1',
    },
    {
      name: 'Test 2',
      description: 'Description 2',
    },
    {
      name: 'Test 3',
      description: 'Description 3',
    }
  ];

  summary = [
    '1',
    '2',
    '3',
  ];

  constructor() { }

  ngOnInit() {
    const today = moment();
    datesToTest.forEach(d => console.log(`There is ${today.diff(moment(d), 'month', true)} months between 'today' and '${d}'`));
  }

}
