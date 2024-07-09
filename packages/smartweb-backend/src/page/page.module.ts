import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PageService } from './page.service';
import { PageResolver } from './page.resolver';
import { RetrievePageService } from './services/crud/retrieve-page.service';
import { CreatePageService } from './services/crud/create-page.service';
import { UpdatePageService } from './services/crud/update-page.service';
@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [
    PageResolver,
    PageService,
    RetrievePageService,
    CreatePageService,
    UpdatePageService,
  ],
  exports: [],
})
export class PageModule {}
