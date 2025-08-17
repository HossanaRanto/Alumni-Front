import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module'

import {ToastrModule} from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthInterceptor } from './services/auth.interceptor';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { DatePipe } from '@angular/common';
// import { ChatComponent } from './features/chat/chat.component';

@NgModule({ declarations: [
        AppComponent,
        NotFoundComponent,
        TestComponent
        // LoginComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        AdminModule,
        UserModule,
        FontAwesomeModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        DatePipe,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
