import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { DonationsService } from './donations.service';
import { Donation, TotalUpdated } from './entities/donation.entity';
import { CreateDonationInput } from './dto/create-donation.input';
import { SortBy } from './dto/sort-donation.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => Donation)
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation(() => Donation, { name: 'createDonation' })
  async createDonation(
    @Args('createDonationInput') createDonationInput: CreateDonationInput,
  ) {
    const created = await this.donationsService.create(createDonationInput);
    const total = await this.donationsService.getTotal();
    console.info('total', total);
    pubSub.publish('totalUpdated', { totalUpdated: { total } });
    return created;
  }

  @Subscription(() => TotalUpdated, { name: 'totalUpdated' })
  totalUpdated() {
    return pubSub.asyncIterator('totalUpdated');
  }

  @Query(() => [Donation], { name: 'donations' })
  async findAll(@Args('sortBy') _sortBy?: SortBy) {
    return await this.donationsService.findAll(_sortBy);
  }

  @Query(() => Donation, { name: 'donation' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.donationsService.findOne(id);
  }

  @Query(() => Number, { name: 'totalDonations' })
  async getTotal() {
    return await this.donationsService.getTotal();
  }
}
