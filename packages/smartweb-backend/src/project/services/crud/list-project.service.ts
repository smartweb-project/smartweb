import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
// import { PrismaService } from '../../prisma/prisma.service';
@Injectable()
export class ListProjectService {
  constructor(private readonly prisma: PrismaService) {}
  async invoke(currentUser) {
    return this.prisma.project.findMany({
      where: {},
    });
  }
}
