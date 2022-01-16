import { Module } from '@nestjs/common';
import { EventRateService } from './event-rate.service';
import { EventRateController } from './event-rate.controller';

@Module({
  controllers: [EventRateController],
  providers: [EventRateService]
})
export class EventRateModule {}
