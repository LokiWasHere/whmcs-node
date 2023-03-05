export interface GetTicketsRequest {
    limitstart?: number;
    limitnum?: number;
    deptid?: number;
    clientid?: number;
    email?: string;
    status?: string;
    subject?: string;
    ignore_dept_assignments?: boolean;
}

export interface GetTicketsResponse {
    result: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    tickets: {
        ticket: Ticket[];
    };
    requestor_name: string;
    requestor_type: string;
    requestor_email: string;
    owner_name: string;
}

export interface Ticket {
    id: number;
    tid: string;
    deptid: number;
    userid: number;
    name: string;
    email: string;
    cc: string;
    c: string;
    date: string;
    subject: string;
    status: string;
    priority: string;
    admin: string;
    attachment: string;
    attachments: Array<string>;
    attachments_removed: number;
    lastreply: string;
    flag: number;
    service: string;
}
