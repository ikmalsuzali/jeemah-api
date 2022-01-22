import { GetPostCategoryDto } from './dto/get-post-category.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostCategoryService } from './post-category.service';
import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';
import {  ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin Post Category')
@Controller('post-category')
export class PostCategoryAdminController {
  constructor(private readonly postCategoryService: PostCategoryService) {}

  @Post()
  @ApiOperation({ summary: 'AS AN ADMIN, I CAN CREATE A POST CATEGORY'})
  create(@Body() createPostCategoryDto: CreatePostCategoryDto) {
    return this.postCategoryService.create(createPostCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'AS AN ADMIN, I CAN FIND ALL POST CATEGORY'})
  findAll(@Query() getPostCategoryDto: GetPostCategoryDto) {
    return this.postCategoryService.findAll(getPostCategoryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'AS AN ADMIN, I CAN FIND ONE POST CATEGORY'})
  findOne(@Param('id') id: string) {
    return this.postCategoryService.findOne(id);
  }

  // @Patch(':id')
  // @ApiOperation({ summary: 'AS AN ADMIN, I CAN UPDATE POST CATEGORY'})
  // update(@Param('id') id: string, @Body() updatePostCategoryDto: UpdatePostCategoryDto) {
  //   return this.postCategoryService.update(id, updatePostCategoryDto);
  // }

  @Delete(':id')
  @ApiOperation({ summary: 'AS AN SUPERADMIN, I CAN DELETE POST CATEGORY'})
  remove(@Param('id') id: string) {
    return this.postCategoryService.remove(id);
  }
}
