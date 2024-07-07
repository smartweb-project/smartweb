import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}
  @Get('vi/health')
  async viHealth() {
    return '30614';
  }

  @Get('/api/base')
  async base() {
    return {
      GITLAB_URL: process.env.GITLAB_URL,
      GITLAB_CLIENT_ID: process.env.GITLAB_CLIENT_ID,
    };
  }
}
