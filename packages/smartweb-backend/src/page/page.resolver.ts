import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PageModel } from './page.model';
import { PageService } from './page.service';
import { RetrievePageService } from './services/crud/retrieve-page.service';
import { RetrievePageModel } from './models/retrieve-page.model';
import { CreatePageService } from './services/crud/create-page.service';
import { UpdatePageService } from './services/crud/update-page.service';

@Resolver(() => 'Project')
export class PageResolver {
  constructor(
    private readonly retrievePageService: RetrievePageService,
    private readonly createPageService: CreatePageService,
    private readonly updateProjectService: UpdatePageService,
  ) {}
  @Query(() => RetrievePageModel, {
    description: '获取一个页面',
  })
  retrievePage(
    @Args('pageID', { type: () => ID }) pageID: string,
  ): Promise<RetrievePageModel> {
    return this.retrievePageService.invoke(pageID);
  }

  @Mutation(() => RetrievePageModel, {
    description: '创建一个新页面',
  })
  createPage(
    @Args('projectID', { type: () => String }) projectID: string,
    @Args('content', { type: () => String }) content: string,
  ): Promise<RetrievePageModel> {
    return this.createPageService.invoke(projectID, content);
  }

  @Mutation(() => RetrievePageModel, {
    description: '更新一个新页面',
  })
  updatePage(
    @Args('pageID', { type: () => ID }) pageID: string,
    @Args('projectID', { type: () => String }) projectID: string,
    @Args('content', { type: () => String }) content: string,
  ): Promise<RetrievePageModel> {
    return this.updateProjectService.invoke(pageID, projectID, content);
  }
}
