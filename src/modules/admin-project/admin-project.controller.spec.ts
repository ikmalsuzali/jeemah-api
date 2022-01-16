import { Test, TestingModule } from '@nestjs/testing';
import { AdminProjectController } from './admin-project.controller';
import { AdminProjectService } from './admin-project.service';

describe('AdminProjectController', () => {
  let controller: AdminProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminProjectController],
      providers: [AdminProjectService],
    }).compile();

    controller = module.get<AdminProjectController>(AdminProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
