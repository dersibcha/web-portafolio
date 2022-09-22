import React from "react";
import { Text, Stack, Flex, Box, useColorModeValue } from "@chakra-ui/react";

const Skill = ({ title, text, icon }) => {
  return (
    <Stack>
      <Box
        minHeight={"350px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={12}
      >
        <Flex
          w={20}
          h={20}
          align={"center"}
          justify={"center"}
          color={"#977855"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontSize={"l"} py={4} fontWeight={600}>
          {title}
        </Text>
        <Text fontSize={"sm"}>{text}</Text>
      </Box>
    </Stack>
  );
};

export default Skill;
