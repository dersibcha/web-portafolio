import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
  FaGithub,
  FaRegEnvelope,
} from "react-icons/fa";
import SocialButton from "./social-button.component";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontSize="sm">© 2022 Derian Sibaja</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/derian-felipe/"}
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton label={"Telegram"} href={"https://t.me/deriantastico"}>
            <FaTelegramPlane />
          </SocialButton>
          <SocialButton label={"Whatsapp"} href={"https://wa.me/50686167640"}>
            <FaWhatsapp />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/dersibcha"}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={"Email"} href={"mailto:derfelsib@gmail.com"}>
            <FaRegEnvelope />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
