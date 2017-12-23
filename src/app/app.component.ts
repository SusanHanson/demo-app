import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/merge';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  title = 'app';
  private data: Observable<Array<number>>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  private gitHubData: Observable<Array<string>>;

  requestUrl: string;

  constructor(private myService: DataService) {
  }

  ngOnInit() {
      const randomOffset = Math.floor(Math.random() * 500);
      this.requestUrl = 'https://api.github.com/users?since=' + randomOffset;
        const response = this.myService.getData(this.requestUrl);
        response.subscribe(data => {
          if (data) {
            this.gitHubData = JSON.parse(data._body);
          }
        });
      }
}
