export interface AddTicketNoteRequest {
    message: string;
    ticketnum?: string;
    ticketid?: number;
    markdown?: boolean;
    attachments?: string;
    created?: string;
}

export interface AddTicketNoteResponse {
    result: string;
}
