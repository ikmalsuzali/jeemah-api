import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProjectFollowerService } from './user-project-follower.service';
import { CreateUserProjectFollowerDto } from './dto/create-user-project-follower.dto';
import { UpdateUserProjectFollowerDto } from './dto/update-user-project-follower.dto';

@Controller('user-project-follower')
export class UserProjectFollowerController {
  constructor(private readonly userProjectFollowerService: UserProjectFollowerService) {}

  // @Post()
  // create(@Body() createUserProjectFollowerDto: CreateUserProjectFollowerDto) {
  //   return this.userProjectFollowerService.create(createUserProjectFollowerDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userProjectFollowerService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userProjectFollowerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserProjectFollowerDto: UpdateUserProjectFollowerDto) {
  //   return this.userProjectFollowerService.update(+id, updateUserProjectFollowerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userProjectFollowerService.remove(id);
  // }
}
