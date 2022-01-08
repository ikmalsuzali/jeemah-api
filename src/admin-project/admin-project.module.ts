import { Module } from '@nestjs/common';
import { AdminProjectService } from './admin-project.service';
import { AdminProjectController } from './admin-project.controller';

@Module({
  controllers: [AdminProjectController],
  providers: [AdminProjectService]
})
export class AdminProjectModule {}
