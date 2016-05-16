import {bootstrap} from '@angular/platform-browser-dynamic'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from '@angular/router'
import {DataService} from './data.service'
bootstrap(AppComponent,[ROUTER_PROVIDERS,DataService]);