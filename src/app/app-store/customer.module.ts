import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { customerReducers } from "./customer-state/customer.reducer";
import { CustomerEffects } from "./customer-state/customer.effects";
import { CustomerService } from "./customer-state/customer.service";
import { CustomerFacade } from "./customer-state/customer.facade";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("customers", customerReducers),
    EffectsModule.forFeature([CustomerEffects])
  ],
  providers: [CustomerEffects, CustomerService, CustomerFacade]
})
export class CustomersModule {}
