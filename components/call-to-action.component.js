import React, { useState } from "react";
import useDownloader from "react-use-downloader";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useMediaQuery,
  Skeleton,
  Fade,
  useDisclosure,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Computer from "../assets/images/computer.gif";
import { BsInfoCircle } from "react-icons/bs";
const PdfModal = dynamic(import("./pdf-modal.component"), { ssr: false });

const fileUrl = "/Derian_Sibaja_CV.pdf";
const filename = "Derian_Sibaja_CV.pdf";

const CallToAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { download } = useDownloader();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSmallDevice] = useMediaQuery("(min-width: 1280px)");
  const infoIcon = <BsInfoCircle h={4} w={4} color="black" />;

  return (
    <Fade in>
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
              <Text
                as="span"
                color="brand.50"
                position={isSmallDevice ? "relative" : ""}
              >
                Derian Sibaja
              </Text>
              <br />
              <Text as="span">Software Engineer</Text>
            </Heading>
            <Text color="gray.500">
              Hello! I'm a Full-Stack Software Engineer based in Heredia, Costa
              Rica. Passionate about Cloud and Web technologies.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded="xl"
                size="lg"
                fontWeight="normal"
                px={6}
                colorScheme="red"
                bg="brand.100"
                _hover={{ bg: "brand.200" }}
              ></Button>
              <Link href="/contact" passHref>
                <Button
                  rounded="xl"
                  size="lg"
                  fontWeight="normal"
                  px={6}
                  leftIcon={infoIcon}
                >
                  Contact me
                </Button>
              </Link>
              <Button onClick={onOpen}>Open Modal</Button>

              <button onClick={() => download(fileUrl, filename)}>
                download CV
              </button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            width="full"
            justify="center"
            align="center"
            position="relative"
          >
            <Box
              position="relative"
              height="600px"
              rounded="3xl"
              boxShadow="2xl"
              width="full"
              overflow="hidden"
            >
              <Image
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                src={Computer}
                onLoad={() => setIsLoaded(true)}
                priority
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <PdfModal isOpen={isOpen} onClose={onClose} />
    </Fade>
  );
};

export default CallToAction;
