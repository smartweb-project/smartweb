import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RetrieveProjectModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  router: string;
}
