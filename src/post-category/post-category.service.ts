import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';

@Injectable()
export class PostCategoryService {
  constructor(private readonly prisma: PrismaClient){}

  create(createPostCategoryDto: CreatePostCategoryDto) {
    return this.prisma.postCategory.create({
      data: createPostCategoryDto
    });
  }

  findAll(search: string) {
    return this.prisma.postCategory.findMany({
      where: {
        name: {
          search: search
        },
        description: {
          search: search
        }
      }
    });
  }

  findOne(id: string) {
    return this.prisma.postCategory.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: string, updatePostCategoryDto: UpdatePostCategoryDto) {
    return this.prisma.postCategory.update({
      where: {
        id: id
      },
      data: updatePostCategoryDto
    });
  }

  remove(id: string) {
    return this.prisma.postCategory.delete({
      where: {
        id: id
      }
    });
  }
}
