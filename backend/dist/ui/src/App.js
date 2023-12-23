"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("@fontsource/montserrat/700.css");
require("@fontsource/montserrat/400.css");
require("@fontsource/montserrat/300.css");
const react_1 = require("@chakra-ui/react");
const Logo_1 = require("./Logo");
const Counter_1 = require("./components/Donation/Counter");
const urql_1 = require("urql");
const Leaderboard_1 = require("./components/Leaderboard/Leaderboard");
const theme = (0, react_1.extendTheme)({
    fonts: {
        heading: "Montserrat",
        body: "Montserrat",
    },
});
const TotalDonationsQuery = `
  query Query {
    totalDonations
  }
`;
const TotalUpdatedQuery = `
  subscription Subscription {
    totalUpdated {
      total
    }
  }
`;
const handleSubscription = (prev, newTotal) => {
    return newTotal?.totalUpdated?.total;
};
const App = () => {
    const [res] = (0, urql_1.useSubscription)({ query: TotalUpdatedQuery }, handleSubscription);
    const [{ data, fetching, error }] = (0, urql_1.useQuery)({
        query: TotalDonationsQuery,
    });
    if (fetching)
        return <p>Loading</p>;
    if (error)
        return <p>Oh no.... {error.message}</p>;
    return (<react_1.ChakraProvider theme={theme}>
      <react_1.Box textAlign="center" fontSize="xl">
        <react_1.Grid minH="100vh" p={3} bg="gray.50">
          <react_1.VStack spacing={8}>
            <Logo_1.Logo h="32" pointerEvents="none"/>
            <react_1.Heading as="h1" size="xl">
              JOIN THE MOVEMENT!
            </react_1.Heading>
            <react_1.Text>
              We did it! Now let’s keep going. Come back anytime you feel like
              removing some trash!
            </react_1.Text>

            <react_1.Heading as="h2" size="4xl">
              <Counter_1.Counter from={0} to={res.data || data.totalDonations}/>
            </react_1.Heading>
            <Leaderboard_1.default />
          </react_1.VStack>
        </react_1.Grid>
      </react_1.Box>
    </react_1.ChakraProvider>);
};
exports.App = App;
//# sourceMappingURL=App.js.map