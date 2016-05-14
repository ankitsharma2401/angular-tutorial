import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ContactService} from './contacts/contact.service';
bootstrap(AppComponent,[ROUTER_PROVIDERS,ContactService]);