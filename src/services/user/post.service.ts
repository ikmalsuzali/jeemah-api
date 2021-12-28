import { PostViewType } from './../../models/post.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';



@Injectable()
export class PostService {
    constructor (
        private prisma: PrismaService, 
    ){}

    // GET ALL USER POSTS BY PROJECTS THEY ARE FOLLOWING
    async getFollowedPosts(project_ids: [string]){
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
              in: project_ids,
            },
          },
        });
    }
    
}
