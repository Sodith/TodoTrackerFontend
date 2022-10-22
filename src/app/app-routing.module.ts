import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ArchieveComponent } from './archieve/archieve.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';

import { FeaturesComponent } from './features/features.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './register/register.component';
import { TrashComponent } from './trash/trash.component';



const routes: Routes = [

  {
    path: "",
    component: HomescreenComponent
  },


  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "notes",
        component: NotesComponent,
      },
     {
        path: "edit",
        component: EditComponent
      },
      {
        path: "archive",
        component: ArchieveComponent
      },
      {
        path: "trash",
        component: TrashComponent
      },]






  },
  {
    path: "features",
    component: FeaturesComponent
  },
  {
    path: "pricing",
    component: PricingComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "contact",
    component: ContactusComponent
  },
  {
    path: "home",
    component: HomescreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
