import {Component,EventEmitter} from '@angular/core'
import {Output} from '@angular/core'
@Component({
   selector:'child',
   template:`
        <h2>Child</h2>
        <p>Value entered in parent component:{{parentValue}}</p>
        <input type="text" #childInput (keyup)="onChange(childInput.value)">
   `,
   inputs:['parentValue:passedValue'],
   //outputs:['childChanged'] 
})
export class ChildComponent{
    parentValue:string;
    @Output() childChanged=new EventEmitter<string>();
    onChange(value:string){
        this.childChanged.emit(value);
    }
}