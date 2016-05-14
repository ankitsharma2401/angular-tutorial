import {Component} from '@angular/core'

@Component({
    template:`
           <div >
            <div>
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name"/>
            </div>
             <div>
                <label for="last-name">Last Name:</label>
                <input  type="text" id="last-name"/>
            </div>
            <div>
                <label for="phone">Contact No:</label>
                <input  type="text" id="phone"/>
            </div>
            <div>
                <label for="email">EmailId:</label>
                <input  type="text" id="email"/>
            </div>           
            <button>Create New Contact</button>
   </div>
    `,
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
export class NewContactComponent{
    
}