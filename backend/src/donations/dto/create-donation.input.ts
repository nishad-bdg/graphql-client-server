import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateDonationInput {
  @IsNotEmpty({ message: 'Count is required' })
  @Field(() => Int)
  count: number;

  @IsNotEmpty({ message: 'Display name is required' })
  @IsString({ message: 'Display name must be valid' })
  @Field()
  displayName: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Enter a valid email' })
  @Field()
  email: string;

  @IsNotEmpty({ message: 'Mobile is required' })
  @Field()
  mobile: string;

  @IsNotEmpty({ message: 'Email is required' })
  @Field()
  team: string;

  @Field()
  message: string;
}
