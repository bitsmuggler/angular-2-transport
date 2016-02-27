export class SearchData {
    public from: string;
    public to: string;

    constructor();
    constructor(from: string, to: string) {
        if(from && from != "") {
            this.from = from;
        }

        if(to && to != "") {
            this.to = to;
        }
    }
}
