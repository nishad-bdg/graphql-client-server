"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const LeaderboardItem_1 = require("./LeaderboardItem");
const urql_1 = require("urql");
const DonationQuery = `
query Query($sortBy: SortBy!) {
    donations(sortBy: $sortBy) {
      id
      displayName
      count
      email
      message
      mobile
      team
      createdAt
    }
  }
`;
const Leaderboard = () => {
    const [field, sortOrderByField] = (0, react_2.useState)("createdAt");
    const [{ data, fetching, error }] = (0, urql_1.useQuery)({
        query: DonationQuery,
        variables: {
            sortBy: {
                field,
                sortOrderByField,
            },
        },
    });
    if (error)
        return <p>Something went wrong ....</p>;
    if (fetching || !data)
        return <p>Loading ....</p>;
    return (<react_1.Box w="100%">
      <react_1.Heading>LEADERBOARD</react_1.Heading>
      <react_1.VStack spacing={4}>
        {data.donations.map((donation) => (<LeaderboardItem_1.default donation={donation}/>))}
      </react_1.VStack>
    </react_1.Box>);
};
exports.default = Leaderboard;
//# sourceMappingURL=Leaderboard.js.map