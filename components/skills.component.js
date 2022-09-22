import React from "react";
import {
  Container,
  Stack,
  Heading,
  useColorModeValue,
  Box,
  SimpleGrid,
  Icon,
  Fade,
} from "@chakra-ui/react";
import Skill from "./skill.component";
import { FaCode, FaDatabase, FaSalesforce, FaGamepad } from "react-icons/fa";

const Skills = () => {
  return (
    <Stack
      bgGradient={useColorModeValue(
        "linear(to-t,  white, #00BCD4)",
        "linear(to-t,  black, #00BCD4)"
      )}
      p={20}
    >
      <Fade in>
        <Container id="services" maxW="7xl">
          <Stack p={10} spacing={0} align={"center"}>
            <Heading>What Can I do?</Heading>
          </Stack>
          <Box py={4}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 4 }} spacing={10}>
              <Skill
                icon={<Icon as={FaCode} w={10} h={10} />}
                title={"Frontend Development"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
              <Skill
                icon={<Icon as={FaDatabase} w={10} h={10} />}
                title={"Backend Development"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
              <Skill
                icon={<Icon as={FaSalesforce} w={10} h={10} />}
                title={"Salesforce Marketing"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
              <Skill
                icon={<Icon as={FaGamepad} w={10} h={10} />}
                title={"Game development Learner"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
            </SimpleGrid>
          </Box>
        </Container>
      </Fade>
    </Stack>
  );
};

export default Skills;
