"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const donations_service_1 = require("./donations.service");
const donation_entity_1 = require("./entities/donation.entity");
const create_donation_input_1 = require("./dto/create-donation.input");
const sort_donation_input_1 = require("./dto/sort-donation.input");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const pubSub = new graphql_subscriptions_1.PubSub();
let DonationsResolver = class DonationsResolver {
    constructor(donationsService) {
        this.donationsService = donationsService;
    }
    async createDonation(createDonationInput) {
        const created = await this.donationsService.create(createDonationInput);
        const total = await this.donationsService.getTotal();
        console.info('total', total);
        pubSub.publish('totalUpdated', { totalUpdated: { total } });
        return created;
    }
    totalUpdated() {
        return pubSub.asyncIterator('totalUpdated');
    }
    async findAll(_sortBy) {
        return await this.donationsService.findAll(_sortBy);
    }
    async findOne(id) {
        return await this.donationsService.findOne(id);
    }
    async getTotal() {
        return await this.donationsService.getTotal();
    }
};
exports.DonationsResolver = DonationsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => donation_entity_1.Donation, { name: 'createDonation' }),
    __param(0, (0, graphql_1.Args)('createDonationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_donation_input_1.CreateDonationInput]),
    __metadata("design:returntype", Promise)
], DonationsResolver.prototype, "createDonation", null);
__decorate([
    (0, graphql_1.Subscription)(() => donation_entity_1.TotalUpdated, { name: 'totalUpdated' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DonationsResolver.prototype, "totalUpdated", null);
__decorate([
    (0, graphql_1.Query)(() => [donation_entity_1.Donation], { name: 'donations' }),
    __param(0, (0, graphql_1.Args)('sortBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sort_donation_input_1.SortBy]),
    __metadata("design:returntype", Promise)
], DonationsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => donation_entity_1.Donation, { name: 'donation' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonationsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => Number, { name: 'totalDonations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonationsResolver.prototype, "getTotal", null);
exports.DonationsResolver = DonationsResolver = __decorate([
    (0, graphql_1.Resolver)(() => donation_entity_1.Donation),
    __metadata("design:paramtypes", [donations_service_1.DonationsService])
], DonationsResolver);
//# sourceMappingURL=donations.resolver.js.map