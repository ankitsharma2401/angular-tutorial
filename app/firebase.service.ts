import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {last} from 'rxjs/operator/last'

@Injectable()
export class FirebaseService{
    constructor(private http:Http){}
    setUser(firstName:string,lastName:string){
      const body=JSON.stringify({firstName:firstName,lastName:last()}); 
    }
    getUser(){
        
    }
}