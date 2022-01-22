import { GetPostDto } from './dto/get-post.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import * as moment from 'moment';

@ApiTags('User Posts')
@Controller('user/post')
export class PostUserController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiOperation({ summary: 'AS A USER, I CAN FIND POSTS'})
  findAll(@Query() getPostDto: GetPostDto) {
    getPostDto.start_date = moment().toDate()
    getPostDto.end_date = moment().toDate()
    return this.postService.findAll(getPostDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'AS A USER, I CAN FIND A POST'})
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

}
