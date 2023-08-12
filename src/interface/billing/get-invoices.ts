export interface GetInvoicesRequest {
    limitstart?: number;
    limitnum?: number;
    userid?: number;
    status?: string;
    orderby?: string;
    order?: string;
}

export interface GetInvoicesResponse {
    result: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    invoices: { invoice?: Invoice[] };
}

export interface Invoice {
    id: number;
    userid: number;
    firstname: string;
    lastname: string;
    companyname: string;
    invoicenum: string;
    date: string;
    duedate: string;
    datepaid: string;
    subtotal: string;
    credit: string;
    tax: string;
    tax2: string;
    total: string;
    taxrate: string;
    taxrate2: string;
    status: string;
    paymentmethod: string;
    notes: string;
    currencycode: string;
    currencyprefix: string;
    currencysuffix: string;
}
