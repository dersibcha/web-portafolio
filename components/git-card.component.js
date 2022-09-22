import React from "react";

import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";

const GitCard = ({ name, description, language, url }) => {
  return (
    <Center py={6}>
      <Box
        w={"280px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        minHeight={"250px"}
      >
        <Heading pb={5} fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        {description != "" && (
          <Text textAlign={"center"} px={3}>
            {description}
          </Text>
        )}
        {language != "null" && (
          <Stack
            align={"center"}
            justify={"center"}
            direction={"row"}
            mt={6}
            pb={5}
          >
            <Badge px={2} py={1} pb fontWeight={"400"}>
              {language}
            </Badge>
          </Stack>
        )}

        <Stack
          align={"center"}
          justify={"center"}
          direction={"row"}
          spacing={4}
        >
          <chakra.button
            px="3"
            py="2"
            bg="blue.400"
            rounded="2xl"
            _hover={{ bg: "blue.500" }}
            fontSize={"sm"}
            cursor={"pointer"}
            as={"a"}
            target="_blank"
            href={url}
            color={"white"}
            transition={"background 0.3s ease"}
            _focus={{
              bg: "blue.500",
            }}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
          >
            See in github
          </chakra.button>
        </Stack>
      </Box>
    </Center>
  );
};

export default GitCard;
