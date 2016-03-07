
import {Component, Injectable} from 'angular2/core';
import {NavComponent} from "./navigation/components/header.component";
import {SearchComponent} from "./search/components/search.component";
import {SearchService} from "./search/services/search.service";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'app',
    template: `
  <navigation></navigation>
  <search></search>
  `,
   directives: [NavComponent, SearchComponent],
   providers: [HTTP_PROVIDERS]
})
export class AppComponent {

    constructor() { 
        console.log('app component ctor. called.');
    }
}