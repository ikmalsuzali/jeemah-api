import { GetPostCategoryDto } from './dto/get-post-category.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostCategoryService } from './post-category.service';
import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';

@Controller('post-category')
export class PostCategoryController {
  constructor(private readonly postCategoryService: PostCategoryService) {}

  @Post()
  create(@Body() createPostCategoryDto: CreatePostCategoryDto) {
    return this.postCategoryService.create(createPostCategoryDto);
  }

  @Get()
  findAll(@Query() getPostCategoryDto: GetPostCategoryDto) {
    return this.postCategoryService.findAll(getPostCategoryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postCategoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostCategoryDto: UpdatePostCategoryDto) {
    return this.postCategoryService.update(id, updatePostCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postCategoryService.remove(id);
  }
}
