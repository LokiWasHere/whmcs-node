export interface GetInvoiceRequest {
    invoiceid: number;
}

export interface GetInvoiceResponse {
    result: string;
    invoiceid: string;
    invoicenum: string;
    userid: string;
    date: string;
    duedate: string;
    datepaid: string;
    subtotal: string;
    credit: string;
    tax: string;
    tax2: string;
    total: string;
    balance: string;
    taxrate: string;
    taxrate2: string;
    status: string;
    paymentmethod: string | null;
    notes: string;
    ccgateway: boolean;
    items: { item: Item[] };
    transactions: {
        transaction: Transaction[];
    };
}

export interface Item {
    id: string;
    type: string;
    relid: string;
    description: string;
    amount: string;
    taxed: string;
}

export interface Transaction {
    id: number;
    userid: number;
    currency: number;
    gateway: string;
    date: string;
    description: string;
    amountin: string;
    fees: string;
    amountout: string;
    rate: string;
    transid: string;
    invoiceid: number;
    refundid: number;
}
