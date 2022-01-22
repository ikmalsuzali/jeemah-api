import { GetPostDto } from './dto/get-post.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin Posts')
@Controller('admin/post')
export class PostAdminController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOperation({ summary: 'AS A ADMIN, I CAN CREATE A POST'})
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'AS A ADMIN, I CAN FIND POSTS'})
  findAll(@Query() getPostDto: GetPostDto) {
    return this.postService.findAll(getPostDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'AS A ADMIN, I CAN FIND A POST'})
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'AS A ADMIN, I CAN UPDATE POSTS'})
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'AS A ADMIN, I CAN DELETE POSTS'})
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
