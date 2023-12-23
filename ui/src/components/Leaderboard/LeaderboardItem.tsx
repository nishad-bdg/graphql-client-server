import React from "react";
import { Donation } from "../../types";
import { Avatar, Badge, Flex, Text } from "@chakra-ui/react";
import formatDate from "../../utils/formatDate";

interface Props {
  donation: Donation;
}

const LeaderboardItem = ({ donation }: Props) => {
  return (
    <Flex
      boxShadow="md"
      p={3}
      bg="white"
      borderRadius="lg"
      maxWidth="xl"
      w="100%"
    >
      <Avatar />
      <Flex flex={1} ml={4} justifyContent="space-between" h="100%">
        <Flex direction="column" textAlign="left">
          <Text
            fontWeight="bold"
            color="blue.500"
            fontSize="sm"
            textTransform="uppercase"
          >
            {donation.team}
          </Text>
          <Text fontWeight="bold">{donation.displayname}</Text>
          <Text fontSize="sm">{donation.message}</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="space-around"
          textAlign="right"
        >
          <div>
            <Badge
              colorScheme="blue"
              borderRadius="full"
              textTransform="lowercase"
              py={1}
              px={3}
            >
              {donation.count.toLocaleString()} pounds
            </Badge>
            <Text fontSize="sm">{formatDate(donation.createdAt)}</Text>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LeaderboardItem;
