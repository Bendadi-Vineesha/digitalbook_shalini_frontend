import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomwComponent } from './components/homw/homw.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BookauthorComponent } from './components/bookauthor/bookauthor.component';
import { FindauthorbookComponent } from './components/findauthorbook/findauthorbook.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReaderdashboardComponent } from './components/readerdashboard/readerdashboard.component';
import {MatCardModule} from '@angular/material/card';
import { FindallbookComponent } from './components/findallbook/findallbook.component';
import { FindbookbyauthorComponent } from './components/findbookbyauthor/findbookbyauthor.component';
import { FindbookbypriceComponent } from './components/findbookbyprice/findbookbyprice.component';
import { FindbookbypublisherComponent } from './components/findbookbypublisher/findbookbypublisher.component';
import { FindbookbycategoryComponent } from './components/findbookbycategory/findbookbycategory.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscribebookComponent } from './subscribebook/subscribebook.component';
import { ReadersubscribebookComponent } from './components/readersubscribebook/readersubscribebook.component';
import { ReaderrepositoryComponent } from './components/readerrepository/readerrepository.component';
import { AuthIntercepter } from './services/auth.intercepter';
import { ReaderinvoiceComponent } from './components/readerinvoice/readerinvoice.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomwComponent,
    LoginComponent,
    DashboardComponent,
    BookauthorComponent,
    FindauthorbookComponent,
    UpdatebookComponent,
    RegistrationComponent,
    ReaderdashboardComponent,
    FindallbookComponent,
    FindbookbyauthorComponent,
    FindbookbypriceComponent,
    FindbookbypublisherComponent,
    FindbookbycategoryComponent,
    SubscribeComponent,
    SubscribebookComponent,
    ReadersubscribebookComponent,
    ReaderrepositoryComponent,
    ReaderinvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    //ReaderrepositoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
