import { CustomerDetailService } from './customers/customer-store/customer-detail.service';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './leads/lead-state/lead.selectors';
import { reducer } from './customers/customer-store/customer-detail.selectors';
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
import { EffectsModule } from '@ngrx/effects';
import { LeadEffect } from './leads/lead-state/lead.effects';
import { LeadService } from './leads/lead-state/lead.service';
import { CustomerDetailEffect } from './customers/customer-store/customer-detail.effects';

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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LeadEffect]),
    ReactiveFormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [LeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
