import {Injectable, Inject} from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {SearchData} from '../models/search.model';
import {Connection} from '../models/connection.model';

@Injectable()
export class SearchService {
    connections: Observable<Array<Connection>>;

    private _todosObserver: any;
    private url = "https://transport.opendata.ch/v1/connections";
    private _dataStore: {
        connections: Array<Connection>
    };


    constructor( @Inject(Http) private http: Http) {
        console.log('ctor. called.');
        
        // Create Observable Stream to output our data
        this.connections = new Observable(observer =>
            this._todosObserver = observer).share();

        this._dataStore = { connections: [] };

    }

    getConnections(searchData: SearchData) {
        var params = new URLSearchParams();

        params.set('from', searchData.from);
        params.set('to', searchData.to);

        return this.http.get(this.url, { search: params })
            .map(response => {
                console.log(response.json());
                return <Connection[]>response.json().connections;
             })
            .subscribe(data => {
                console.log(data);
                console.log(data[0].from.departure);
                console.log(data[0].from.departureTimestamp);
                // Update data store
                this._dataStore.connections = data;

                // Push the new list of todos into the Observable stream
                this._todosObserver.next(this._dataStore.connections);
            });
    }
}