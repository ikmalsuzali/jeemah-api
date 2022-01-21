import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { UpdateUserProjectFollowerDto } from './dto/update-user-project-follower.dto';
import {GetUserProjectFollowerDto} from './dto/get-user-project-followers.dto'

@Injectable()
export class UserProjectFollowerService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByUser(getUserProjectFollowerDto: GetUserProjectFollowerDto) {
    const { user_id } = getUserProjectFollowerDto
    return await this.prisma.userProjectFollower.findMany({
      where: {
        user_id: user_id || undefined,
      },
      include: {
        project: true
      }
    });
  }

  async findAllByProject(getUserProjectFollowerDto: GetUserProjectFollowerDto) {
    const { project_id } = getUserProjectFollowerDto
    return await this.prisma.userProjectFollower.findFirst({
      where: {
        project_id: project_id || undefined
      },
      include: {
        user: true
      }
    });
  }

  async update(
    updateUserProjectFollowerDto: UpdateUserProjectFollowerDto
  ) {
    let { user_id, project_ids } = updateUserProjectFollowerDto
    if (!project_ids.length) return
    let userProjects = []
    const getUserProjectFollowerDto: GetUserProjectFollowerDto = {
      user_id: user_id
    }

    // Remove any duplicates
    project_ids = [...new Set(project_ids)]

    project_ids.forEach((project_id) => {
      userProjects.push({
        user_id: user_id,
        project_id: project_id,
      });
    });

    await this.remove(updateUserProjectFollowerDto.user_id, []);

    await this.prisma.userProjectFollower.createMany({
      data: userProjects
    })

    return await this.findAllByUser(getUserProjectFollowerDto)
  }

  remove(user_id: string, project_ids: string[]) {
    return this.prisma.userProjectFollower.deleteMany({
      where: {
        user_id: user_id,
        project_id: {
          in: project_ids.length ? project_ids : undefined,
        },
      },
    });
  }
}

