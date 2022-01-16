import { PaymentMethod, PaymentStatus } from '@prisma/client';

export class GetPaymentDto {
    project_id: string
    user_id?: string
    search?: string
    payment_status?: PaymentStatus
    payment_method?: PaymentMethod
}
