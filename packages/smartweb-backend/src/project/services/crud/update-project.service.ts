import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { removeNullKeys } from '../../../utils';

@Injectable()
export class UpdateProjectService {
  constructor(private readonly prisma: PrismaService) {}
  async invoke(projectID, name) {
    return this.prisma.project.update({
      where: {
        id: projectID,
      },
      data: removeNullKeys({
        name,
      }),
    });
  }
}
