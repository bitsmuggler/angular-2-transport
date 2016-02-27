import {Injectable, Inject, Component} from 'angular2/core';
import {SearchData} from './search.class';
import {SearchService} from './search.service'

@Component({
    selector: 'search',
    templateUrl: "./app/components/search/search.markup.html",
    styleUrls : [ "./app/components/search/search.style.css"],
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