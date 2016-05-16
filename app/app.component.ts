import { Component } from '@angular/core';
import {ContactListComponent} from './contacts/contact-list.component'
import {NewContactComponent} from './contacts/new-contact.component'
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import {HttpTestComponent} from './http-test.component'
import {ChildComponent} from './child.component'
import {Component1Component} from './component1.component'
import {Component2Component} from './component2.component'

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
    <http-test></http-test>
    <div class="pipes">
      <h2>Date Pipes</h2>
      <div>
        {{date | date:'fullDate'}}
      </div>
      <h2>Number Pipes</h2>
      <div>
        {{4.566 | number:'1.4-4'}}
      </div>
      <h2>Currency Pipes</h2>
      <div>
        {{15.99 | currency:'USD':true:'1.4-4'}}
      </div>
      <h2>Stateful Pipes</h2>
      <div>
        {{randomData | async}}
      </div>
    </div>
  </div>
  
  <div class="parent">
    <h1>Parent</h1>
    <p>Value entered in child component:{{childValue}}</p>
    <input type="text" #parentInput 
    (keyup)="0"><br>
    
    <div class="child">
      <child [passedValue]="parentInput.value"
      (childChanged)="childValue=$event"></child>
    </div>
  </div>
  
  <section class="component">
    <my-component-1></my-component-1>
    
  </section>
  <section class="component">
    <my-component-2></my-component-2>
   
  </section>
  
  `,
  
  directives: [ContactListComponent,HttpTestComponent,
  ROUTER_DIRECTIVES,ChildComponent,Component1Component,Component2Component]
})
@RouteConfig([
  {path:'/contacts', name:'Contacts',component:ContactListComponent,useAsDefault:true},
  {path:'/newcontact', name:'NewContact',component:NewContactComponent}
  
])
export class AppComponent {
  date = new Date();
  childValue:string;
  randomData = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Random data!'), 1000);
    
  });
 }