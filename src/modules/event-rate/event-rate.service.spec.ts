import { Test, TestingModule } from '@nestjs/testing';
import { EventRateService } from './event-rate.service';

describe('EventRateService', () => {
  let service: EventRateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventRateService],
    }).compile();

    service = module.get<EventRateService>(EventRateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
