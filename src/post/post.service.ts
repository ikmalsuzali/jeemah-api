import { GetPostDto } from './dto/get-post.dto';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // As an admin, I can create events that public users can see when they view my profile
  async create(createPostDto: CreatePostDto) {
    const {
      name,
      description,
      post_base_category,
      post_view_type,
      post_category_id,
      start_date,
      end_date,
      project_id,
    } = createPostDto;
    this.prisma.post.create({
      data: {
        name: name,
        description: description,
        post_base_category: post_base_category,
        post_view_type: post_view_type,
        post_category: {
          connect: { id: post_category_id },
        },
        start_date: start_date,
        end_date: end_date,
        project: {
          connect: { id: project_id },
        },
      },
    });
  }

  async findAll(getPostDto: GetPostDto) {
    const { search, project_id, post_base_category, post_view_type, post_category_id} = getPostDto
    return await this.prisma.post.findMany({
      where: {
        OR: [
          {
            name: {
              search: search || undefined,
            },
          },
          {
            description: {
              search: search || undefined,
            },
          },
        ],
        AND: [
          {
            project_id: project_id,
          },
          {
            post_base_category: post_base_category || undefined,
          },
          {
            post_view_type: post_view_type || undefined,
          },
          {
            post_category_id: post_category_id || undefined,
          },
        ],
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.post.findUnique({
      where: { id },
      include: {
        post_images: true,
        post_attachments: true,
      },
    });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const {
      name,
      description,
      post_base_category,
      post_view_type,
      post_category_id,
      start_date,
      end_date,
      project_id,
    } = updatePostDto;

    return await this.prisma.post.update({
      where: { id },
      data: {
        name: name,
        description: description,
        post_base_category: post_base_category,
        post_view_type: post_view_type,
        post_category: {
          connect: { id: post_category_id },
        },
        start_date: start_date,
        end_date: end_date,
        project: {
          connect: { id: project_id },
        },
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
