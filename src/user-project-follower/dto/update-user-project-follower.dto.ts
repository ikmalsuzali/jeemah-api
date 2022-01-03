import { PartialType } from '@nestjs/swagger';
import { CreateUserProjectFollowerDto } from './create-user-project-follower.dto';

export class UpdateUserProjectFollowerDto extends PartialType(CreateUserProjectFollowerDto) {}
