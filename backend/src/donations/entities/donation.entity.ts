import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Donation {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  count: number;

  @Field()
  displayName: string;

  @Field()
  email: string;

  @Field()
  mobile: string;

  @Field()
  team: string;

  @Field()
  message: string;

  @Field()
  createdAt: Date;
}

@ObjectType()
export class TotalUpdated {
  @Field(() => Int)
  total: number;
}
