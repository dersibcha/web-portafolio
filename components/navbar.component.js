import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { locale } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("common");
  const Links = [t("about"), t("projects"), t("contact")];
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={"flex"}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Stack direction={{ sm: "column", md: "row" }}>
              <Stack direction={"row"} spacing={7} pr={2}>
                {locale === "en" ? (
                  <a href={"/es"}>{locale}</a>
                ) : (
                  <a href={"/en"}>{locale}</a>
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
