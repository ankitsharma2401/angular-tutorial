import {Component} from '@angular/core'
import {ContactService} from './contact.service'
import {Router,RouteParams} from '@angular/router-deprecated'
import {OnInit} from '@angular/core'
import {Contact} from './contact'

@Component({
    template:`
           <form #myForm="ngForm" (ngSubmit)="onSubmit()">
            <div>
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name"
                ngControl="first-Name"
                [(ngModel)]="newContact.firstName"
                required
                #firstName="ngForm"
                />
                <span *ngIf="!firstName.valid">Not Valid</span>
            </div>
             <div>
                <label for="last-name">Last Name:</label>
                <input  type="text" id="last-name"
                ngControl="last-Name"
                [(ngModel)]="newContact.lastName"
                required
                />
            </div>
            <div>
                <label for="phone">Contact No:</label>
                <input  type="text" id="phone"
                ngControl="phone"
                [(ngModel)]="newContact.contactNo"
                required
                />
            </div>
            <div>
                <label for="email">EmailId:</label>
                <input  type="text" id="email"
                ngControl="email"
                [(ngModel)]="newContact.email"
                required
                />
            </div>           
            <button type="submit" [disabled]="!myForm.form.valid">Create New Contact</button>
   </form>
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
        .ng-invalid{
            border:1px solid red;
        }
    `]
})
export class NewContactComponent implements OnInit{
   // public passedLastName="";
   newContact:Contact;
    constructor(private contactService:ContactService,private router:Router,private routeParams:RouteParams){
        
    }
    // onAddCreate(firstName,lastName,phone,email){
    //     let contact={firstName:firstName,lastName:lastName,contactNo:phone,email:email};
    //     this.contactService.insertContact(contact);
    //     this.router.navigate(['Contacts']);
    // }
    onSubmit(){
        this.contactService.insertContact(this.newContact);
        this.router.navigate(['Contacts']);
    }
    ngOnInit():any{
    //this.passedLastName=this.routeParams.get("lastName");
    this.newContact={firstName:"", lastName:this.routeParams.get("lastName"),contactNo:"",email:"" };        
    }
    
}