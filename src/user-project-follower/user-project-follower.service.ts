import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateUserProjectFollowerDto } from './dto/create-user-project-follower.dto';
import { UpdateUserProjectFollowerDto } from './dto/update-user-project-follower.dto';

@Injectable()
export class UserProjectFollowerService {
  constructor(private readonly prisma: PrismaClient) {}

  // create(createUserProjectFollowerDto: CreateUserProjectFollowerDto) {
  //   return 'This action adds a new userProjectFollower';
  // }

  // findAll() {
  //   return `This action returns all userProjectFollower`;
  // }

  async findOne(user_id: string, project_id: string) {
    return await this.prisma.userProjectFollower.findFirst({
      where: {
        user_id,
        project_id
      }
    });
  }

  async update(
    updateUserProjectFollowerDto: UpdateUserProjectFollowerDto
  ) {
    const {user_id, project_ids} = updateUserProjectFollowerDto
    if (!project_ids.length) return
    let userProjects = []

     project_ids.forEach((project_id) => {
       userProjects.push({
         user_id: user_id,
         project_id: project_id,
       });
     });

    await this.prisma.userProjectFollower.deleteMany({
      where: {
        user_id: updateUserProjectFollowerDto.user_id
      },
    });

    return await this.prisma.userProjectFollower.createMany({
      data: userProjects
    })
    
  }

  remove(user_id: string, project_ids: string[]) {
    return this.prisma.userProjectFollower.deleteMany({
      where: {
        user_id: user_id,
        project_id: {
          in: project_ids
        }
      }
    });
  }
}
