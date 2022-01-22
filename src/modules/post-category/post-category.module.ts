import { Module } from '@nestjs/common';
import { PostCategoryService } from './post-category.service';
import { PostCategoryAdminController } from './post-category.admin.controller';

@Module({
  controllers: [PostCategoryAdminController],
  providers: [PostCategoryService]
})
export class PostCategoryModule {}
