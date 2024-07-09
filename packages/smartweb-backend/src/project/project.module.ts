import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProjectResolver } from './project.resolver';
import { RetrieveProjectService } from './services/crud/retrieve-project.service';
import { UpdateProjectService } from './services/crud/update-project.service';
import { CreateProjectService } from './services/crud/create-project.service';
import { ListProjectService } from './services/crud/list-project.service';
// import { CreatePageService } from '../page/services/crud/create-project.service';
@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [
    ProjectResolver,
    RetrieveProjectService,
    UpdateProjectService,
    // CreatePageService,
    CreateProjectService,
    ListProjectService,
  ],
  exports: [],
})
export class ProjectModule {}
