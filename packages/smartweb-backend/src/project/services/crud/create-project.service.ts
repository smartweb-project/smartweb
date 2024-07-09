import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CreateProjectService {
  constructor(private readonly prisma: PrismaService) {}
  async invoke() {
    return this.prisma.project
      .create({
        data: {
          name: '',
          description: '',
          router: '',
          creator: 'tzhangm',
        },
      })
      .then((res) => res.id);
  }
}
