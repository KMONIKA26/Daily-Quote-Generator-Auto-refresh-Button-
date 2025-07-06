import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Spinner,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

const QuoteBox = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/quotes/random');
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch every 30 seconds
  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <Box
      p={8}
      borderWidth="1px"
      borderRadius="lg"
      shadow="lg"
      maxW="600px"
      mx="auto"
      mt={10}
      textAlign="center"
    >
      {loading ? (
        <Spinner size="xl" />
      ) : (
        quote && (
          <VStack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              “{quote.content}”
            </Text>
            <Text fontStyle="italic">— {quote.author}</Text>
          </VStack>
        )
      )}

      <Button mt={6} colorScheme="teal" onClick={fetchQuote}>
        Get New Quote
      </Button>
    </Box>
  );
};

export default QuoteBox;
