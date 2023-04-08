export interface GetSupportDepartmentsRequest {
    ignore_dept_assignments?: boolean;
}

export interface GetSupportDepartmentsResponse {
    result: string;
    totalresults: number;
    departments: { department: Department[] };
}

export interface Department {
    id: string;
    name: string;
    awaitingreply: string;
    opentickets: string;
}
