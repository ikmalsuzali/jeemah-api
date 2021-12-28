import { CreatePostInput } from './../../resolvers/post/dto/createPost.input';
import { PostViewType } from './../../models/post.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';



@Injectable()
export class PostService {
    constructor (
        private prisma: PrismaService, 
    ){}

    // GET ALL USER POSTS BY PROJECTS THEY ARE FOLLOWING
    async getFollowedPosts(projectIds: [string]){
        this.prisma.post.findMany({
          where: {
            post_view_type: PostViewType.FOLLOWERS,
            start_date: {
              gte: new Date(),
            },
            end_date: {
              lt: new Date(),
            },
            project_id: {
              in: projectIds,
            },
          },
        });
    }

    async createPost(
      userId: string,
      projectId: string,
      data: CreatePostInput)
    {
      const newPost = this.prisma.post.create({
        data: {
          name: data.name,
          description: data.description,
          post_base_category: data.post_base_category,
          post_view_type: data.post_view_type,
          post_category_id: data.post_category_id,
          start_date: data.start_date,
          end_date: data.end_date,
          user_id: userId,
          project_id: projectId,
          created_by: userId,
          updated_by: userId
        }
      })

      return newPost
        

    }
    
}
