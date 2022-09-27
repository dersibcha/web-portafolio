import React from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Logo from "../assets/images/deviam.png";

const NavLink = ({ children, linkto }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={linkto}>{children}</Link>
  </Box>
);

const Navbar = () => {
  const { pathname, locale } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("common");
  const linksText = [t("about"), t("projects"), t("contact")];
  const linksHref = [
    "/" + locale,
    "/" + locale + "/" + "projects",
    "/" + locale + "/" + "contact",
  ];
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={"flex"}>
              <NavLink linkto={"/" + locale}>
                <Image
                  width={131}
                  height={28}
                  alt="Logo Image"
                  src={Logo}
                  priority
                />
              </NavLink>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack pr={"12px"} as={"nav"} spacing={10} display={"flex"}>
              {linksText.map((link, index) => (
                <NavLink linkto={linksHref[index]} key={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
            <Stack pl={"12px"} direction={{ sm: "column", md: "row" }}>
              <Stack direction={"row"} spacing={7} pr={2}>
                {locale === "en" ? (
                  <a href={"/es" + "/" + pathname}>{locale}</a>
                ) : (
                  <a href={"/en" + "/" + pathname}>{locale}</a>
                )}
              </Stack>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <FaMoon /> : <FaSun />}
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default Navbar;
