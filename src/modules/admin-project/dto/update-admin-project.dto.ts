import { PartialType } from '@nestjs/swagger';
import { CreateAdminProjectDto } from './create-admin-project.dto';

export class UpdateAdminProjectDto extends PartialType(CreateAdminProjectDto) {}
