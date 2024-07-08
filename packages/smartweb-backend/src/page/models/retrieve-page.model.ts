import { Field, ID, ObjectType } from '@nestjs/graphql';
import {BaseModel} from "../../common/base.model";

@ObjectType()
export class RetrievePageModel extends BaseModel{
  @Field(() => ID)
  id: string;

  @Field(() => String)
  projectID: string;

  @Field(() => String)
  content: string;
}
