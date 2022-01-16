import { Test, TestingModule } from '@nestjs/testing';
import { Ipay88Service } from './ipay88.service';

describe('Ipay88Service', () => {
  let service: Ipay88Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ipay88Service],
    }).compile();

    service = module.get<Ipay88Service>(Ipay88Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
