import { DonationsService } from './donations.service';
import { Donation } from './entities/donation.entity';
import { CreateDonationInput } from './dto/create-donation.input';
import { SortBy } from './dto/sort-donation.input';
export declare class DonationsResolver {
    private readonly donationsService;
    constructor(donationsService: DonationsService);
    createDonation(createDonationInput: CreateDonationInput): Promise<Donation>;
    totalUpdated(): AsyncIterator<unknown, any, undefined>;
    findAll(_sortBy?: SortBy): Promise<Donation[]>;
    findOne(id: number): Promise<Donation>;
    getTotal(): Promise<number>;
}
