import { Test, TestingModule } from '@nestjs/testing';
import { UserProjectFollowerController } from './user-project-follower.controller';
import { UserProjectFollowerService } from './user-project-follower.service';

describe('UserProjectFollowerController', () => {
  let controller: UserProjectFollowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserProjectFollowerController],
      providers: [UserProjectFollowerService],
    }).compile();

    controller = module.get<UserProjectFollowerController>(UserProjectFollowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
