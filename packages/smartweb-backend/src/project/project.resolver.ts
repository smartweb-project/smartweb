import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GqlUser } from '../decorators/gql-user.decorator';
import { RetrieveProjectModel } from './models/retrieve-project.model';
import { User } from '../user/user.model';
import { RetrieveProjectService } from './services/crud/retrieve-project.service';
import { CreateProjectService } from './services/crud/create-project.service';
import { ListProjectService } from './services/crud/list-project.service';
import { UpdateProjectService } from './services/crud/update-project.service';
@Resolver(() => 'Project')
export class ProjectResolver {
  constructor(
    private readonly retrieveProjectService: RetrieveProjectService,
    private readonly createProjectService: CreateProjectService,
    private readonly listProjectService: ListProjectService,
    private readonly updateProjectService: UpdateProjectService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => RetrieveProjectModel, {
    description: '根据ID获取Project',
  })
  retrieveProject(
    @GqlUser() user: User,
    @Args('projectID', { type: () => ID }) projectID: string,
  ): Promise<RetrieveProjectModel> {
    return this.retrieveProjectService.invoke(user, projectID);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [RetrieveProjectModel], {
    description: '获取项目列表',
  })
  listProject(@GqlUser() user: User): Promise<RetrieveProjectModel[]> {
    return this.listProjectService.invoke(user);
  }

  @Mutation(() => String, {
    description: '创建一个新页面',
  })
  createProject(): Promise<string> {
    return this.createProjectService.invoke();
  }

  @Mutation(() => RetrieveProjectModel, {
    description: '更新一个项目',
  })
  updateProject(
    @Args('projectID', { type: () => ID }) projectID: string,
    @Args('name', { type: () => String }) name: string,
  ): Promise<RetrieveProjectModel> {
    return this.updateProjectService.invoke(projectID, name);
  }
}
