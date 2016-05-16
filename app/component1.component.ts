import {Component} from '@angular/core'
import {DataService} from './data.service'

@Component({
    selector:'my-component-1',
    template:`
    <h1>Component 1</h1>
    <div>
        <button (click)="onGetData()">Get random data</button>
        <p>Random Data: {{data}}</p>
        <input type="text" #input>
        <button (click)="onAddItem(input.value)">Add</button>
    </div>
    `
})
export class Component1Component {
    data:string;
    constructor(private dataService:DataService){}
    
    onGetData(){
        this.data=this.dataService.getRandomData();
    }
    onAddItem(data:string){
        this.dataService.insertData(data);
    }
}