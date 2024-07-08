import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PageService {
  constructor(private readonly prisma: PrismaService) {}

  async getPages() {
    return {
      name: 'test',
      id: '1',
    };
  }
}
