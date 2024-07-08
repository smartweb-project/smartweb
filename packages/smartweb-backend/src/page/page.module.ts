import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PageService } from './page.service';
import { PageResolver } from './page.resolver';
import {RetrievePageService} from "./crud/retrieve-page.service";
import {CreatePageService} from "./crud/create-project.service";
import {UpdateProjectService} from "./crud/update-project.service";
@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [PageResolver, PageService,RetrievePageService,CreatePageService,UpdateProjectService],
  exports: [],
})
export class PageModule {}
