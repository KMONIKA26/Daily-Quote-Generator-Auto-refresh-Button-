// src/App.jsx
import React from "react";
import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import QuoteBox from "./components/QuoteBox";

function App() {
  return (
    <ChakraProvider>
      <Box p={6}>
        <Heading textAlign="center" mb={6}>
          Daily Quote Generator
        </Heading>
        <QuoteBox />
      </Box>
    </ChakraProvider>
  );
}

export default App;
