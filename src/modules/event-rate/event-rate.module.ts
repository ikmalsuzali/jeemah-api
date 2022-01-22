import { Module } from '@nestjs/common';
import { EventRateService } from './event-rate.service';
import { EventRateAdminController } from './event-rate.admin.controller';

@Module({
  controllers: [EventRateAdminController],
  providers: [EventRateService]
})
export class EventRateModule {}
