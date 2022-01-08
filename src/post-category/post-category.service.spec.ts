import { Test, TestingModule } from '@nestjs/testing';
import { PostCategoryService } from './post-category.service';

describe('PostCategoryService', () => {
  let service: PostCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostCategoryService],
    }).compile();

    service = module.get<PostCategoryService>(PostCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
