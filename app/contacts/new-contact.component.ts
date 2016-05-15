import {Component} from '@angular/core'
import {ContactService} from './contact.service'
import {Router,RouteParams} from '@angular/router-deprecated'
import {OnInit} from '@angular/core'
import {Contact} from './contact'
import {Validators,ControlGroup,FormBuilder} from '@angular/common'


@Component({
    template:`
           <form  [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <div>
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name"
                [ngFormControl]="myForm.controls['firstName']"
                #firstName="ngForm"
                />
                <span *ngIf="!firstName.valid">Not valid</span>
            </div>
            
             <div>
                <label for="last-name">Last Name:</label>
                <input  type="text" id="last-name"
                [ngFormControl]="myForm.controls['lastName']"
                />
            </div>
            <div>
                <label for="phone">Contact No:</label>
                <input  type="text" id="phone"
                [ngFormControl]="myForm.controls['contactNo']"
                />
            </div>
            <div>
                <label for="email">EmailId:</label>
                <input  type="text" id="email"
                [ngFormControl]="myForm.controls['email']"
                />
            </div>           
            <button type="submit" [disabled]="!myForm.valid">Create New Contact</button>
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
   myForm:ControlGroup;
    constructor(private contactService:ContactService,private router:Router,private routeParams:RouteParams,private formBuilder:FormBuilder){
    }
    // onAddCreate(firstName,lastName,phone,email){
    //     let contact={firstName:firstName,lastName:lastName,contactNo:phone,email:email};
    //     this.contactService.insertContact(contact);
    //     this.router.navigate(['Contacts']);
    // }
    onSubmit(value){
        this.contactService.insertContact(value);
        this.router.navigate(['Contacts']);
    }
    ngOnInit():any{
this.myForm=this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:[this.routeParams.get('lastName'),Validators.required],
   contactNo:['',Validators.required],
    email:['',Validators.required]
});
 }
    
}