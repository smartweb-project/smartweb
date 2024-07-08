import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;
}
