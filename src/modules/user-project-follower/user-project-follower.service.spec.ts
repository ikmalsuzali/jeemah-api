import { Test, TestingModule } from '@nestjs/testing';
import { UserProjectFollowerService } from './user-project-follower.service';

describe('UserProjectFollowerService', () => {
  let service: UserProjectFollowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProjectFollowerService],
    }).compile();

    service = module.get<UserProjectFollowerService>(UserProjectFollowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
