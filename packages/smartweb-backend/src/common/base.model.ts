import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseModel{
  @Field(() => Date, {
    description: '创建时间',
  })
  createdAt: Date;

  @Field(() => Date, {
    description: '更新时间',
  })
  updatedAt: Date;
}
