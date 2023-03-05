export interface GetSupportDepartmentsRequest {
    ignore_dept_assignments?: boolean;
}

export interface GetSupportDepartmentsResponse {
    result: string;
    totalresults: number;
    departments: { department: Department[] };
}

export interface Department {
    id: number;
    name: string;
    awaitingreply: number;
    opentickets: number;
}
