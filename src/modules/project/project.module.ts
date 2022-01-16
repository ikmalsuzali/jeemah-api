import { AddressService } from '../address/address.service';
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, AddressService]
})
export class ProjectModule {}
