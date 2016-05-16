import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ContactService} from './contacts/contact.service';
import { HTTP_PROVIDERS } from '@angular/http';
import {DataService} from './data.service'

bootstrap(AppComponent,[ROUTER_PROVIDERS,ContactService, HTTP_PROVIDERS,DataService]);