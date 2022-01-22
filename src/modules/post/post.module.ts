import { Module } from '@nestjs/common';
import { PostAdminController } from './post.admin.controller';
import { PostService } from './post.service';
import { PostUserController } from './post.user.controller';

@Module({
  controllers: [PostUserController, PostAdminController],
  providers: [PostService]
})
export class PostModule {}
