import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateController } from './state.controller';

@Module({
  controllers: [StateController],
  providers: [StateService]
})
export class StateModule {}
