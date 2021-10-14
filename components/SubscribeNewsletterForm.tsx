import React, { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Form, FormState } from "@/types/form";

export const SubscribeNewsletterForm = (): JSX.Element => {
  const [formState, setFormState] = useState<FormState>({
    state: Form.Initial,
  });
  const [email, setEmail] = useState("");

  const onSubscribeSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState({ state: Form.Loading });

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setFormState({
        state: Form.Error,
        message: error,
      });
      return;
    }

    setFormState({
      state: Form.Success,
      message: `Hooray! You're now on the list.`,
    });
  };

  return (
    <Stack
      bg={useColorModeValue("", "gray.800")}
      p="4"
      rounded="lg"
      shadow="md"
      spacing="4"
      maxW="500px"
      mx="auto"
    >
      <Heading size="md">Subscribe to the Newsletter</Heading>
      <Text>
        Get emails from me about tech, cool open-source projects, and learnings
        from my projects.
      </Text>
      <HStack as={"form"} onSubmit={onSubscribeSubmit}>
        <Input
          id={"email"}
          type={"email"}
          required
          placeholder={"pieter@levels.io"}
          aria-label={"Your Email"}
          value={email}
          disabled={[Form.Loading, Form.Success].includes(formState.state)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          flex="1"
        />
        <Button
          colorScheme={formState.state === Form.Success ? "green" : "blue"}
          isLoading={formState.state === Form.Loading}
          type={formState.state === Form.Success ? "button" : "submit"}
        >
          {formState.state === Form.Success ? <CheckIcon /> : "Submit"}
        </Button>
      </HStack>
      <Text color={formState.state === Form.Error ? "red.500" : "gray.500"}>
        {formState.message ?? "Frequency: ~ 1 per month ✌️"}
      </Text>
    </Stack>
  );
};

export default SubscribeNewsletterForm;
