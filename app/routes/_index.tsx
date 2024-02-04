import type { MetaFunction } from "@remix-run/node";
import { Button, Container, HStack, Heading, Text } from "@yamada-ui/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Heading as="h1">Welcome to Remix</Heading>
      <HStack>
      <Text as="p">Count: {count}</Text>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </HStack>
    </Container>
  );
}
