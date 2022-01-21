import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserProjectFollowerService } from './user-project-follower.service';
import { CreateUserProjectFollowerDto } from './dto/create-user-project-follower.dto';
import { UpdateUserProjectFollowerDto } from './dto/update-user-project-follower.dto';
import { GetUserProjectFollowerDto } from './dto/get-user-project-followers.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('User Projects Following')
@Controller('user/project')
export class UserProjectFollowerController {
  constructor(private readonly userProjectFollowerService: UserProjectFollowerService) {}

  // @Post()
  // create(@Body() createUserProjectFollowerDto: CreateUserProjectFollowerDto) {
  //   return this.userProjectFollowerService.create(createUserProjectFollowerDto);
  // }

  @Get('/following')
  @ApiOperation({ summary: 'AS A USER, I CAN SEE ALL PROJECT(S) I FOLLOW' })
  findAll(@Query() getUserProjectFollowerDto: GetUserProjectFollowerDto) {
    return this.userProjectFollowerService.findAllByUser(getUserProjectFollowerDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userProjectFollowerService.findOne(+id);
  // }

  @Patch('/follow')
  update(@Body() updateUserProjectFollowerDto: UpdateUserProjectFollowerDto) {
    return this.userProjectFollowerService.update(updateUserProjectFollowerDto);
  }

  // @Delete('/unfollow')
  // remove(@Param('id') id: string) {
  //   return this.userProjectFollowerService.remove(id);
  // }
}
