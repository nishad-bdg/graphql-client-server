import { CreateDonationInput } from './dto/create-donation.input';
import { PrismaService } from 'prisma/prisma.service';
import { Donation } from './entities/donation.entity';
import { SortBy } from './dto/sort-donation.input';
export declare class DonationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(_orderBy?: SortBy): Promise<Donation[]>;
    findOne(id: number): Promise<Donation>;
    create(createDonationInput: CreateDonationInput): Promise<Donation>;
    getTotal(): Promise<number>;
}
