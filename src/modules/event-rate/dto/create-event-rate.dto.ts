import { EventRateType } from '@prisma/client';

export class CreateEventRateDto {
  name: string;
  description?: string;
  rate_amount: number;
  event_id: string;
  event_rate_type: EventRateType;
  project_id: string;
}
