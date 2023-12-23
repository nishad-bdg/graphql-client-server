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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDonationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateDonationInput = class CreateDonationInput {
};
exports.CreateDonationInput = CreateDonationInput;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Count is required' }),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateDonationInput.prototype, "count", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Display name is required' }),
    (0, class_validator_1.IsString)({ message: 'Display name must be valid' }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateDonationInput.prototype, "displayName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Enter a valid email' }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateDonationInput.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Mobile is required' }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateDonationInput.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateDonationInput.prototype, "team", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateDonationInput.prototype, "message", void 0);
exports.CreateDonationInput = CreateDonationInput = __decorate([
    (0, graphql_1.InputType)()
], CreateDonationInput);
//# sourceMappingURL=create-donation.input.js.map