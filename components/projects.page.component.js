import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Grid,
  Center,
  Select,
} from "@chakra-ui/react";
import GitCard from "./git-card.component";

import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator,
} from "@ajna/pagination";

const ProjectsPage = ({ data }) => {
  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pages,
    pagesCount,
    offset,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
  } = usePagination({
    total: data?.length,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: {
      pageSize: 5,
      isDisabled: false,
      currentPage: 1,
    },
  });

  const handlePageChange = (nextPage) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log("request new data with ->", nextPage);
  };

  const handlePageSizeChange = (event) => {
    const pageSize = Number(event.target.value);
    setCurrentPage(1);
    setPageSize(pageSize);
  };

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            See my{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              GitHub
            </Text>{" "}
            projects
          </Heading>

          <Stack>
            <Pagination
              pagesCount={pagesCount}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            >
              <PaginationContainer
                align="center"
                justify="space-between"
                p={4}
                w="full"
              >
                <PaginationPrevious
                  _hover={{
                    bg: "blue.400",
                  }}
                  bg="blue.300"
                  onClick={() =>
                    console.log(
                      "Im executing my own function along with Previous component functionality"
                    )
                  }
                >
                  <Text>Previous</Text>
                </PaginationPrevious>
                <PaginationPageGroup
                  isInline
                  align="center"
                  separator={
                    <PaginationSeparator
                      onClick={() =>
                        console.log(
                          "Im executing my own function along with Separator component functionality"
                        )
                      }
                      bg="blue.300"
                      fontSize="sm"
                      w={7}
                      jumpSize={11}
                    />
                  }
                >
                  {pages.map((page) => (
                    <PaginationPage
                      w={7}
                      bg="white.300"
                      key={`pagination_page_${page}`}
                      page={page}
                      onClick={() =>
                        console.log(
                          "Im executing my own function along with Page component functionality"
                        )
                      }
                      fontSize="sm"
                      _hover={{
                        bg: "blue.100",
                      }}
                      _current={{
                        bg: "blue.300",
                        fontSize: "sm",
                        w: 7,
                      }}
                    />
                  ))}
                </PaginationPageGroup>
                <PaginationNext
                  _hover={{
                    bg: "blue.400",
                  }}
                  bg="blue.300"
                  onClick={() =>
                    console.log(
                      "Im executing my own function along with Next component functionality"
                    )
                  }
                >
                  <Text>Next</Text>
                </PaginationNext>
              </PaginationContainer>
            </Pagination>
            <Center w="full">
              <Text>Total: {data?.length}</Text>
              <Select ml={3} onChange={handlePageSizeChange} w={40}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="30">30</option>
              </Select>
            </Center>

            <Grid
              gap={3}
              templateColumns="repeat(5, 1fr)"
              templateRows="repeat(2, 1fr)"
            >
              {data
                ?.filter(
                  (project) => project.private == false && project.fork == false
                )
                .slice(offset, offset + pageSize)
                .map((project) => (
                  <GitCard
                    key={project?.id}
                    name={project?.name}
                    description={project?.description}
                    language={project?.language}
                    url={project?.html_url}
                  />
                ))}
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProjectsPage;
