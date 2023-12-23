import { Injectable } from '@nestjs/common';
import { CreateDonationInput } from './dto/create-donation.input';
// import { UpdateDonationInput } from './dto/update-donation.input';
import { PrismaService } from 'prisma/prisma.service';
import { Donation } from './entities/donation.entity';
import { SortBy } from './dto/sort-donation.input';

@Injectable()
export class DonationsService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(_orderBy?: SortBy): Promise<Donation[]> {
    const { field = 'createdAt', direction = 'desc' } = _orderBy || {};
    return await this.prisma.donation.findMany({
      orderBy: { [field]: direction },
    });
  }

  async findOne(id: number): Promise<Donation> {
    return await this.prisma.donation.findUnique({
      where: { id: id },
    });
  }

  async create(createDonationInput: CreateDonationInput): Promise<Donation> {
    return await this.prisma.donation.create({
      data: createDonationInput,
    });
  }

  async getTotal(): Promise<number> {
    const response = await this.prisma.donation.aggregate({
      _sum: {
        count: true,
      },
    });
    return response._sum.count;
  }

  // async findAll() {
  //   return `This action returns all donations`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} donation`;
  // }

  // update(id: number, updateDonationInput: UpdateDonationInput) {
  //   return `This action updates a #${id} donation`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} donation`;
  // }
}
