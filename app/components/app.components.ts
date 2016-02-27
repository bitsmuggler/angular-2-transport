
import {Component, Injectable} from 'angular2/core';
import {NavComponent} from "./navigation/nav.components";
import {SearchComponent} from "./search/search.components";
import {SearchService} from "./search/search.service";
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

    constructor() { }
}