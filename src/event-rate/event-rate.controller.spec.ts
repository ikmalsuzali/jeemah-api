import { Test, TestingModule } from '@nestjs/testing';
import { EventRateController } from './event-rate.controller';
import { EventRateService } from './event-rate.service';

describe('EventRateController', () => {
  let controller: EventRateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventRateController],
      providers: [EventRateService],
    }).compile();

    controller = module.get<EventRateController>(EventRateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
