import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PricingComponent } from './pricing/pricing.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FeaturesComponent } from './features/features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { NotesComponent } from './notes/notes.component';
import { TrashComponent } from './trash/trash.component';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { FilterPipe } from './shared/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './edit/edit.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SketchpadComponent } from './sketchpad/sketchpad.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ArchieveComponent } from './archieve/archieve.component';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    AdminComponent,
    PricingComponent,
    FeaturesComponent,
    DashboardComponent,
    MainCompComponent,
    NotesComponent,
    TrashComponent,
    EditComponent,
    FilterPipe,
    HeaderComponent,
    SketchpadComponent,
    ArchieveComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTabsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MdbCheckboxModule,
    NgxPaginationModule,
    MatPaginatorModule,
    SignaturePadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
