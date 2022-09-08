import React from "react";
import {
  Container,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Skills = () => {
  return (
    <Stack
      bgGradient={useColorModeValue(
        "linear(to-t,  white, #00BCD4)",
        "linear(to-t,  black, #00BCD4)"
      )}
    >
      <Container maxW="7xl">
        <Stack
          align="center"
          py={{ base: 12, md: 14 }}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.2}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text>Software Engineer</Text>
            </Heading>
            <Text color="gray.500">
              Hello! I'm a Full-Stack Software Engineer based in Heredia, Costa
              Rica. Passionate about Cloud and Web technologies.
            </Text>
          </Stack>
        </Stack>
        <Stack
          align="center"
          py={{ base: 12, md: 14 }}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.2}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text>Software Engineer</Text>
            </Heading>
            <Text color="gray.500">
              Hello! I'm a Full-Stack Software Engineer based in Heredia, Costa
              Rica. Passionate about Cloud and Web technologies.
            </Text>
          </Stack>
        </Stack>
        <Stack
          align="center"
          py={{ base: 12, md: 14 }}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.2}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text>Software Engineer</Text>
            </Heading>
            <Text color="gray.500">
              Hello! I'm a Full-Stack Software Engineer based in Heredia, Costa
              Rica. Passionate about Cloud and Web technologies.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Skills;
