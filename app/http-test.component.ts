import {Component} from '@angular/core'

@Component({
    selector:'http-test',
    template:`
    <button>Test GET Request</button><br>
    <p>Output:{{getData}}</p>
    <button>Test POST Request</button><br>
    <p>Output: {{postData}}</p>
    `
})
export class HttpTestComponent{
    getData:string;
    postData:string;
}