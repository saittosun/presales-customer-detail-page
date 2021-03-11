import { Customer } from "./customer";

export class Api {
  get customers() {
    return [...this._customers];
  }

  private _customers: Customer[] = [
    {
      id: 1,
      customerName: 'Antwerpen',
      projectName: 'Nova',
      status: 'offer',
      date: 'end of june'
    },
    {
      id: 2,
      customerName: 'Brussel',
      projectName: 'Digipolis',
      status: 'pitch',
      date: 'end of february'
    },
    {
      id: 3,
      customerName: 'Gent',
      projectName: 'Nova',
      status: 'Bafo',
      date: 'end of march'
    },
    {
      id: 4,
      customerName: 'Studio',
      projectName: 'presales',
      status: 'offer',
      date: 'end of april'
    },
    {
      id: 5,
      customerName: 'Cronos',
      projectName: 'Nova',
      status: 'offer',
      date: 'end of may'
    },
    {
      id: 6,
      customerName: 'Catcoon',
      projectName: 'renson',
      status: 'pitch',
      date: 'end of april'
    },
    {
      id: 7,
      customerName: 'Engie',
      projectName: 'polis',
      status: 'pitch',
      date: 'end of march'
    },
    {
      id: 8,
      customerName: 'ahovoks',
      projectName: 'search',
      status: 'Bafo',
      date: 'end of may'
    },
    {
      id: 9,
      customerName: 'ecom',
      projectName: 'firstfloor',
      status: 'offer',
      date: 'end of april'
    },
    {
      id: 10,
      customerName: 'eucobat',
      projectName: 'boulevart',
      status: 'bafo',
      date: 'end of february'
    },
  ];
}
