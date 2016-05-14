import { Component } from '@angular/core';
import {ContactListComponent} from './contacts/contact-list.component'
import {NewContactComponent} from './contacts/new-contact.component'
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'


@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
  <header>
    <nav>
      <a [routerLink]="['Contacts']">Contacts</a>
      <a [routerLink]="['NewContact']">New Contacts</a>
    </nav>
  </header>
  
  <div class="main">
    <router-outlet></router-outlet>
  </div>
  
  `,
  directives: [ContactListComponent,
  ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/contacts', name:'Contacts',component:ContactListComponent,useAsDefault:true},
  {path:'/newcontact', name:'NewContact',component:NewContactComponent}
  
])
export class AppComponent { }