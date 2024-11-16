import { Box, Heading, TextField, Button, Text } from "@radix-ui/themes";
import { useState } from "react";

export function TwoFieldInputForm({
  title,
  action,
  result,
  error,
}: {
  title: string;
  action: (val1: string, val2: string) => void;
  result?: string;
  error?: string;
}) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <Box>
      <Heading>{title}</Heading>
      <TextField.Root
        placeholder="amount"
        onChange={(e) => setInput1(e.target.value)}
      ></TextField.Root>
      <TextField.Root
        placeholder="address"
        onChange={(e) => setInput2(e.target.value)}
      />
      <Button
        onClick={() => {
          action(input1, input2);
        }}
      >
        Execute
      </Button>
      <Text>{result}</Text>
      <Text color="red">{error}</Text>
    </Box>
  );
}
