export interface GetProductsRequest {
    pid?: string;
    gid?: number;
    module?: string;
}

export interface GetProductsResponse {
    result: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    products: { product: Product[] };
}

export interface Product {
    pid: number;
    gid: number;
    type: string;
    name: string;
    description: string;
    module: string;
    paytype: string;
    pricing: PricingType;
    customfields: {
        customfield: Customfield[];
    };
    configoptions: {
        configoption: Configoption[];
    };
}

export interface Customfield {
    id: number;
    name: string;
    description: string;
    required: string;
}

export interface Configoption {
    id: number;
    name: string;
    type: string;
    options: {
        option: OptionType[];
    };
}

export interface OptionType {
    id: number;
    name: string;
    rawName: string | null;
    recurring: string | null;
    required: boolean | null;
    pricing: PricingType;
}

export interface PricingType {
    [currency: string]: {
        prefix: string;
        suffix: string;
        msetupfee: string;
        qsetupfee: string;
        ssetupfee: string;
        asetupfee: string;
        bsetupfee: string;
        tsetupfee: string;
        monthly: string;
        quarterly: string;
        semiannually: string;
        annually: string;
        biennially: string;
        triennially: string;
    };
}
