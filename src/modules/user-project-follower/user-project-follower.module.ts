import { Module } from '@nestjs/common';
import { UserProjectFollowerService } from './user-project-follower.service';
import { UserProjectFollowerController } from './user-project-follower.controller';

@Module({
  controllers: [UserProjectFollowerController],
  providers: [UserProjectFollowerService]
})
export class UserProjectFollowerModule {}
