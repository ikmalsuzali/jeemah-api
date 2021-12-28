import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  // Create company and also create a project
  async createProjects() {}

  // Get all admin projects
  async getAdminProjects() {}
}
