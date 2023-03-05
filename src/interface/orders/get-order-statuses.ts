export interface GetOrderStatusesRequest {}

export interface GetOrderStatusesResponse {
    result: string;
    totalresults: number;
    statuses: { status: Status[] };
}

export interface Status {
    title: string;
    count: number;
}
