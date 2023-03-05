export interface GetClientGroupsRequest {}

export interface GetClientGroupsResponse {
    result: string;
    totalresults: number;
    groups: { group: Group[] };
}

export interface Group {
    id: number;
    groupname: string;
    groupcolour: string;
    discountpercent: number;
    susptermexempt: string;
    separateinvoices: string;
}
