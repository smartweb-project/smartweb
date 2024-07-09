import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CreatePageService {
  constructor(private readonly prisma: PrismaService) {}
  async invoke(projectID, content) {
    return this.prisma.page.create({
      data: {
        projectID,
        content,
      },
    });
  }
}
