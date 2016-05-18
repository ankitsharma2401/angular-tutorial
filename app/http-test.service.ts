import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'

@Injectable()
export class HttpTestService{
    constructor(private http:Http){}
    getCurrentTime(){
         //return this.http.get('http://date.jsontest.com')
         //.map(res => res.json());
    }
    postJSON(){
        
    }
}