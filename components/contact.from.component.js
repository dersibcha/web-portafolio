import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Textarea,
  Input,
  InputGroup,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        try {
          const response = await fetch("/api/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          let resp = await response.json();
          if (resp?.error) {
            toast({
              title: "Error",
              description: "Oops something happened " + resp.error,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Email sent",
              description: "I will contact you a soon as posible",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
        } catch (error) {
          toast({
            title: "Error",
            description: "Oops something happened " + error,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } finally {
          reset();

          resolve();
        }
      }, 1000);
    });
  };

  return (
    <Stack
      bg={"gray.50"}
      rounded={"xl"}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: "lg" }}
    >
      <Stack spacing={4}>
        <Heading
          color={"gray.800"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        >
          Contact
          <Text
            as={"span"}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
          >
            !
          </Text>
        </Heading>
      </Stack>
      <Box mt={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl isInvalid={errors.email}>
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                Email
              </Text>
              <InputGroup>
                <Input
                  id="email"
                  placeholder="Enter your email address"
                  type="email"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  {...register("email", {
                    required: "This is required",
                  })}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.subject}>
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                Subject
              </Text>
              <InputGroup>
                <Input
                  id="subject"
                  placeholder="Enter the subject for the email"
                  type="text"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  {...register("subject", {
                    required: "This is required",
                  })}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.subject && errors.subject.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.message}>
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                Message
              </Text>
              <Textarea
                id="message"
                name="message"
                placeholder={"Add your message"}
                rows={6}
                resize="none"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                {...register("message", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <Button
            isLoading={isSubmitting}
            type="submit"
            fontFamily={"heading"}
            mt={8}
            w={"full"}
            bgGradient="linear(to-r, red.400,pink.400)"
            color={"white"}
            _hover={{
              bgGradient: "linear(to-r, red.400,pink.400)",
              boxShadow: "xl",
            }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Stack>
  );
};

export default ContactForm;
