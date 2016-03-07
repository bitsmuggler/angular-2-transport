import {Injectable, Inject, Component} from 'angular2/core';
import {SearchData} from '../models/search.model';
import {SearchService} from '../services/search.service';

@Component({
    selector: 'search',
    templateUrl: "./app/search/components/search.component.html",
    styleUrls : [ "./app/search/components/search.component.css"],
    providers: [SearchService]
})
export class SearchComponent {

    private connections: any;

    constructor(@Inject(SearchService) private searchService: SearchService){
        console.log('ctor.');
        searchService.connections.subscribe(updatedConnections => this.connections = updatedConnections);
    };

    onSearchConnection(from, to) {
        var searchData = new SearchData(from, to);
        console.log('From: ' + searchData.from);
        console.log('To: ' + searchData.to);
        console.log(searchData);

        this.searchService.getConnections(searchData);
    }
}