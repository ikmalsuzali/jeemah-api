import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  // GET ALL USER PROJECTS THAT THEY ARE FOLLOWING
  async getFollowedProject() {}

  // REMOVE PROJECT(S) USER IS FOLLOWING
  async unfollowProjects() {}

  // ADD PROJECT(S) USER IS FOLLOWING
  async followProjects() {}
}
