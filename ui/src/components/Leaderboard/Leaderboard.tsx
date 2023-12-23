import { Box, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import LeaderboardItem from "./LeaderboardItem";
import { Donation } from "../../types";
import { useQuery } from "urql";

type DonationQueryRes = {
  donations: Donation[];
};

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
  const [field, sortOrderByField] = useState("createdAt");

  const [{ data, fetching, error }] = useQuery<DonationQueryRes>({
    query: DonationQuery,
    variables: {
      sortBy: {
        field,
        sortOrderByField,
      },
    },
  });

  if (error) return <p>Something went wrong ....</p>;
  if (fetching || !data) return <p>Loading ....</p>;

  return (
    <Box w="100%">
      <Heading>LEADERBOARD</Heading>
      <VStack spacing={4}>
        {data.donations.map((donation) => (
          <LeaderboardItem donation={donation} />
        ))}
      </VStack>
    </Box>
  );
};

export default Leaderboard;
