import {Component} from '@angular/core'
import {Contact} from './contact'
import {Router} from '@angular/router-deprecated'
@Component({
    selector:"contactSelector",
    template:`
    
   <div >
            <div>
                <label for="first-name">First Name:</label>
                <input [(ngModel)]="contact.firstName" type="text" id="first-name"/>
            </div>
             <div>
                <label for="last-name">Last Name:</label>
                <input [(ngModel)]="contact.lastName" type="text" id="last-name"/>
            </div>
            <div>
                <label for="phone">Contact No:</label>
                <input [(ngModel)]="contact.contactNo" type="text" id="phone"/>
            </div>
            <div>
                <label for="email">EmailId:</label>
                <input [(ngModel)]="contact.email" type="text" id="email"/>
            </div>           
            <button (click)="onCreateNew()">Create Contact from Here</button>
   </div>
 
    `,
   inputs:["contact"],
   styles:[`
    label{
        display:inline-block;
        width:140px;
    }
    input{
        width:250px;
    }
   `] 
})
export class ContactComponent{
 public contact:Contact=null;   
 constructor(private router:Router){}
 onCreateNew(){
     this.router.navigate(['NewContact',{lastName:this.contact.lastName}]);
 }
}   
