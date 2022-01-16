import { PartialType } from '@nestjs/swagger';
import { CreateEventRateDto } from './create-event-rate.dto';

export class UpdateEventRateDto extends PartialType(CreateEventRateDto) {}
