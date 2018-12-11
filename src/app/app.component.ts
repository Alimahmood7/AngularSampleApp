import { Component, OnInit, ViewChild } from '@angular/core';
import { resolve } from 'url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app';
  rxjs$;
  $title;
  @ViewChild('title') title: any;
  constructor() {
  }

  ngOnInit() {
    console.log(this.title);
    console.log(document.getElementById('title'));
    // this.$title =  document.getElementById('title');
    //  this.rxjs$ = Observable.fromEvent(this.$title , 'keyup');
    //  console.log(this.rxjs$);
    //  this.rxjs$
    //  .map(e => e.target.value)
    //  .distinctUntilChanged()
    //  .debounceTime(250)
    //  .switchMap(this.getItems)
    //  .subscribe((event) => {
    //   console.log(event);
    //   document.getElementById('result').innerHTML = event;
    // });
    // Observable.interval(500).take(3).subscribe(
    //   res => {
    //     console.log(res);
    //   }, error => {
    //     console.log(error);
    //   }, () => {
    //     console.log('complete');
    //   });
    // const subscription = this.createObservable();
    // subscription.subscribe(res => {
    //    console.log(res);
    // });
  }

  // createObservable() {
  //   return new Observable( observe => {
  //     setInterval(() => {
  //       observe.next(1);
  //     }, 2000);
  //   });
  // }


  // changeResults(event: any) {
  //   const result = event.target.value;
  //   console.log(event.target.value);
  //   this.getItems(result).then((res) => {
  //      console.log(res);
  //      document.getElementById('result').innerHTML = res[0];
  //   });
  // }

  // getItems(title) {
  //  return new Promise((resolve , reject) => {
  //  setTimeout( () => {
  //   resolve([title]);
  //  }, 1000 );
  //  });
  // }
}
