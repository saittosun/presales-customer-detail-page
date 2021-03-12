import { of } from 'rxjs';
import { CustomerDetail } from './customer-detail';


export class CustomerDetailApi {

  get customerDetails() {
    return of (
      [...this._customerDetails]
    )
  }

  private _customerDetails: CustomerDetail[] = [
    {
      id: 1,
      customername: 'Antwerpen',
      addressline1: 'Nova',
      addressline2: 'offer',
      city: 'denderleeuw',
      country: 'België',
      state: 'oost-vlanderen',
      zip: '111',
      vat: 111,
      firstname: 'sait',
      lastname: 'tosun',
      email: 'test@test.com',
      phonenumber: 999999999
    },
    {
      id: 2,
      customername: 'hamburg',
      addressline1: 'Nova',
      addressline2: 'offer',
      city: 'hamburg',
      country: 'België',
      state: 'oost-vlanderen',
      zip: '111',
      vat: 111,
      firstname: 'sait',
      lastname: 'tosun',
      email: 'test@test.com',
      phonenumber: 999999999
    }
  ];
}
