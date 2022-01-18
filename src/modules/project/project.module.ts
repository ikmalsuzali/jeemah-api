import { ProjectUserController } from './project.user.controller';
import { AddressService } from '../address/address.service';
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectAdminController } from './project.admin.controller';

@Module({
  controllers: [ProjectAdminController, ProjectUserController],
  providers: [ProjectService, AddressService]
})
export class ProjectModule {}
