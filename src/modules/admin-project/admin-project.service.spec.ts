import { Test, TestingModule } from '@nestjs/testing';
import { AdminProjectService } from './admin-project.service';

describe('AdminProjectService', () => {
  let service: AdminProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminProjectService],
    }).compile();

    service = module.get<AdminProjectService>(AdminProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
