import { PaymentMethod, PaymentStatus } from "@prisma/client"

export class CreatePaymentDto {
    reference_no: string
    user_id?: string
    // name?: string
    // email?: string
    // phone_number?: string
    response_status: number
    payment_method: PaymentMethod
    payment_status: PaymentStatus
    project_id: string
}
