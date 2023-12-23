"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const formatDate_1 = require("../../utils/formatDate");
const LeaderboardItem = ({ donation }) => {
    return (<react_2.Flex boxShadow="md" p={3} bg="white" borderRadius="lg" maxWidth="xl" w="100%">
      <react_2.Avatar />
      <react_2.Flex flex={1} ml={4} justifyContent="space-between" h="100%">
        <react_2.Flex direction="column" textAlign="left">
          <react_2.Text fontWeight="bold" color="blue.500" fontSize="sm" textTransform="uppercase">
            {donation.team}
          </react_2.Text>
          <react_2.Text fontWeight="bold">{donation.displayname}</react_2.Text>
          <react_2.Text fontSize="sm">{donation.message}</react_2.Text>
        </react_2.Flex>

        <react_2.Flex flexDirection="column" justifyContent="space-around" textAlign="right">
          <div>
            <react_2.Badge colorScheme="blue" borderRadius="full" textTransform="lowercase" py={1} px={3}>
              {donation.count.toLocaleString()} pounds
            </react_2.Badge>
            <react_2.Text fontSize="sm">{(0, formatDate_1.default)(donation.createdAt)}</react_2.Text>
          </div>
        </react_2.Flex>
      </react_2.Flex>
    </react_2.Flex>);
};
exports.default = LeaderboardItem;
//# sourceMappingURL=LeaderboardItem.js.map