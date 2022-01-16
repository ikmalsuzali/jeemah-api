import { BookingStatus, ViewType } from '@prisma/client';

export class GetBookingDto {
    project_id: string
    booking_status: BookingStatus
    booking_view_type: ViewType
    search?: string
    start_datetime?: Date
    end_datetime?: Date
    event_id?: string
}