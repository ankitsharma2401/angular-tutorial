import {Component} from '@angular/core'
import {ContactService} from './contact.service'
import {Router,RouteParams} from '@angular/router-deprecated'
import {OnInit} from '@angular/core'

@Component({
    template:`
           <div >
            <div>
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name" #firstName />
            </div>
             <div>
                <label for="last-name">Last Name:</label>
                <input  type="text" id="last-name" #lastName value="{{passedLastName}}"/>
            </div>
            <div>
                <label for="phone">Contact No:</label>
                <input  type="text" id="phone" #phone/>
            </div>
            <div>
                <label for="email">EmailId:</label>
                <input  type="text" id="email" #email/>
            </div>           
            <button (click)="onAddCreate(firstName.value,lastName.value,phone.value,email.value)">Create New Contact</button>
   </div>
    `,
    providers:[ContactService],
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
export class NewContactComponent implements OnInit{
    public passedLastName="";
    constructor(private contactService:ContactService,private router:Router,private routeParams:RouteParams){
        
    }
    onAddCreate(firstName,lastName,phone,email){
        let contact={firstName:firstName,lastName:lastName,contactNo:phone,email:email};
        this.contactService.insertContact(contact);
        this.router.navigate(['Contacts']);
    }
    ngOnInit():any{
    this.passedLastName=this.routeParams.get("lastName");        
    }
}