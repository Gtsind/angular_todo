export interface Invoice {
  code: string;
  concept: string;
  currency: string;
  invoiceId: number;
  amount: number;
  status: string;
}


export enum INVOICE_STATUS {
  DONE = 'DONE',
  PENDING = 'PENDING'
}