import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProjectResolver } from './project.resolver';
import {RetrieveProjectService} from "./services/crud/retrieve-project.service";
@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [
    ProjectResolver,
    RetrieveProjectService
  ],
  exports: [],
})
export class ProjectModule {}
