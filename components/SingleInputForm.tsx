import { Box, Heading, TextField, Button, Text } from "@radix-ui/themes";
import { useState } from "react";

export function SingleInputForm({
  title,
  action,
  result,
  error,
}: {
  title: string;
  action: (val: string) => void;
  result?: string;
  error?: string;
}) {
  const [input, setInput] = useState("");
  return (
    <Box>
      <Heading>{title}</Heading>
      <TextField.Root
        placeholder="amount"
        onChange={(e) => setInput(e.target.value)}
      >
        <TextField.Slot side="right">
          <Button
            onClick={() => {
              action(input);
            }}
          >
            Execute
          </Button>
        </TextField.Slot>
      </TextField.Root>
      <Text>{result}</Text>
      <Text color="red">{error}</Text>
    </Box>
  );
}
