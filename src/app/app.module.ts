import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchComponent } from '../app/search/search.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { LeadDetailComponent } from './leads/lead-detail/lead-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { NewLeadFormComponent } from './leads/new-lead-form/new-lead-form.component';
import { NewCustomerFormComponent } from './customers/new-customer-form/new-customer-form.component';
import { InputRefDirective } from './shared/input-ref.directive';
import { WithValidationInputComponent } from './shared/with-validation-input/with-validation-input.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LeadsComponent,
    CustomersComponent,
    SearchComponent,
    NotFoundComponent,
    DropdownDirective,
    CustomerDetailComponent,
    LeadDetailComponent,
    NewLeadFormComponent,
    NewCustomerFormComponent,
    InputRefDirective,
    WithValidationInputComponent,
    CustomerEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
