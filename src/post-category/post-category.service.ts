import { GetPostCategoryDto } from './dto/get-post-category.dto';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';

@Injectable()
export class PostCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPostCategoryDto: CreatePostCategoryDto) {
    return this.prisma.postCategory.create({
      data: createPostCategoryDto,
    });
  }

  findAll(getPostCategoryDto: GetPostCategoryDto) {
    const { search, project_id} = getPostCategoryDto
    return this.prisma.postCategory.findMany({
      where: {
        OR: [
          {
            name: {
              search: search,
            },
          },
          {
            description: {
              search: search,
            }
          }
        ],
        AND: [
          {
            project_id: project_id
          }
        ]
        

      },
    });
  }

  findOne(id: string) {
    return this.prisma.postCategory.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updatePostCategoryDto: UpdatePostCategoryDto) {
    return this.prisma.postCategory.update({
      where: {
        id: id,
      },
      data: updatePostCategoryDto,
    });
  }

  remove(id: string) {
    return this.prisma.postCategory.delete({
      where: {
        id: id,
      },
    });
  }
}
