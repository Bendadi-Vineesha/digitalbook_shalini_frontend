import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomwComponent } from './components/homw/homw.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { BookauthorComponent } from './components/bookauthor/bookauthor.component';
import { FindauthorbookComponent } from './components/findauthorbook/findauthorbook.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReaderdashboardComponent } from './components/readerdashboard/readerdashboard.component';
import { FindallbookComponent } from './components/findallbook/findallbook.component';
import { FindbookbypriceComponent } from './components/findbookbyprice/findbookbyprice.component';
import { FindbookbyauthorComponent } from './components/findbookbyauthor/findbookbyauthor.component';
import { FindbookbycategoryComponent } from './components/findbookbycategory/findbookbycategory.component';
import { FindbookbypublisherComponent } from './components/findbookbypublisher/findbookbypublisher.component';
import { SubscribebookComponent } from './subscribebook/subscribebook.component';
import { ReadersubscribebookComponent } from './components/readersubscribebook/readersubscribebook.component';
import { ReaderrepositoryComponent } from './components/readerrepository/readerrepository.component';
import { ReaderinvoiceComponent } from './components/readerinvoice/readerinvoice.component';

const routes: Routes = [

  {
    path:'',
    component:HomwComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:"createBook",
    component:BookauthorComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:"findauthorbook",
    component:FindauthorbookComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:"updatebook/:id",
    component:UpdatebookComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:"readersubscribebook/:id",
    component:ReadersubscribebookComponent,
    pathMatch:'full'
  },
  
  {
    path:"registration",
    component:RegistrationComponent,
    pathMatch:'full'
  },
  {
    path:"readerdashboard",
    component:ReaderdashboardComponent,
    pathMatch:'full'
  },
  {
    path:"findallbook",
    component:FindallbookComponent,
    pathMatch:'full'
  },
  {
    path:"findbookbyprice",
    component:FindbookbypriceComponent,
    pathMatch:'full'
  },
  {
    path:"findbookbyauthor",
    component:FindbookbyauthorComponent,
    pathMatch:'full'
  },
  {
    path:"findbookbycategory",
    component:FindbookbycategoryComponent,
    pathMatch:'full'
  },
  {
    path:"findbookbypublisher",
    component:FindbookbypublisherComponent,
    pathMatch:'full'
  },
  {
    path:"readerrepository",
    component:ReaderrepositoryComponent,
    pathMatch:'full'
  },
  {
    path:"readerinvoice",
    component:ReaderinvoiceComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
