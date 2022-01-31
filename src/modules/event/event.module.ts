import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventAdminController } from './event.admin.controller';
import { EventUserController } from './event.user.controller';

@Module({
  controllers: [EventAdminController, EventUserController],
  providers: [EventService]
})
export class EventModule {}
