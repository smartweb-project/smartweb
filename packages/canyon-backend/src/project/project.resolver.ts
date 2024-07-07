import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GqlUser } from '../decorators/gql-user.decorator';
import {RetrieveProjectModel} from "./models/retrieve-project.model";
import { User } from '../user/user.model';
import {RetrieveProjectService} from "./services/crud/retrieve-project.service";
@Resolver(() => 'Project')
export class ProjectResolver {
  constructor(
    private readonly retrieveProjectService: RetrieveProjectService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => RetrieveProjectModel, {
    description: '根据ID获取Project',
  })
  retrieveProject(
    @GqlUser() user: User,
  ): Promise<RetrieveProjectModel> {
    return this.retrieveProjectService.invoke(user, user.id)
  }
}
