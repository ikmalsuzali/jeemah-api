import { BookingStatus, PaymentType, ViewType } from "@prisma/client"

export class CreateBookingDto {
    name: string
    reference_no?: string
    description?:  string
    cancelled_description?: string
    start_datetime: Date
    duration_minute: number
    discount: number
    booking_status: BookingStatus
    booking_view_type: ViewType
    payment_type?: PaymentType
    info_color?: string
    max_attendees: number
    event_id?: string
    project_id: string
    booking_images: string[]
    booking_attachments: string[]
    user_booking_attendences: string[]

}
