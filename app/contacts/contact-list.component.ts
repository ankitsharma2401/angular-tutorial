import {Component} from '@angular/core'
import {ContactComponent} from './contact.component'
import {ContactService} from './contact.service'
import {Contact} from './contact'
import {OnInit} from '@angular/core'

@Component({
    selector:'contact-list',
    template:`
    <ul>
        <li *ngFor="let contact of contacts"
        (click)="selectContact(contact)"
        [class.clicked]="showDetails===contact"
        >
            {{contact.firstName}} {{contact.lastName}}
        </li>
    </ul>
    <contactSelector [contact]="showDetails"></contactSelector>
    `,
    directives:[ContactComponent],
    providers:[ContactService],
    styleUrls:["./assests/css/contact-list.css"]
})
export class ContactListComponent implements OnInit{
    
    public showDetails={};
     public contacts:Contact[];
    
    constructor(private contactService: ContactService){}
    getContacts(){
        this.contactService.getContacts().then((contacts:Contact[])=>this.contacts=contacts);
    }
    selectContact(contact){
        this.showDetails=contact;
    }
    ngOnInit():any{
        this.getContacts();
    }
}