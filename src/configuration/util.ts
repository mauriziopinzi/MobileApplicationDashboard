import { Injectable } from '@angular/core';
import {RequestOptions, Headers } from '@angular/http';


@Injectable()
export class Util {
  constructor() {}

   getHeaders(username : string, password : string): RequestOptions {
    let headers: Headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    let options = new RequestOptions({headers:headers});
    return options;
  }

  getCheckConfUrl(serverUrl: string) {
    return 'http://'+serverUrl+'/checkconf';
  }
  getChartItemUrl(serverUrl: string, tag: string) {
    return 'http://'+serverUrl+'/chartitem?filter='+tag;
  }

  getChartUrl(serverUrl: string, confId : number) {
    return 'http://'+serverUrl+'/testsetchart/'+confId;
  }
  getChartBySelectorUrl(serverUrl: string, key1 : string,key2 : string,entity : string,chart : string,) {
    return 'http://'+serverUrl+'/testsetchart?key1='+key1+'&key2='+key2+'&entity='+entity+'&chart='+chart;
  }

  getInfoAppUrl(serverUrl: string) {
    return 'http://'+serverUrl+'/infoapp';
  }
  getSelectorUrl(serverUrl: string) {
    return 'http://'+serverUrl+'/selector';
  }

  logTime(message: string){
    var d = new Date,
    dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
    console.log(message + ' ' + dformat);
  }
}