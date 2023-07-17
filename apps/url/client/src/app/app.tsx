import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { Container, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import ShortenUrlForm from './ShortenUrlForm';
import UrlList from "./UrlList"; // Update the import path here


export function App() {
  const [urls, setUrls] = useState<Array<Shortened>>([]);

  const requestShortUrl = useCallback(
    async (inputUrl: string) => {
      const response = await axios.post(`http://localhost:3333/api/shorten`, {
        original: inputUrl,
      });

      const newUrl = response.data as Shortened;

      setUrls((prevUrls) => [newUrl, ...prevUrls]);
    },
    []
  );

  return (
    <Container maxWidth="4xl" marginBlock={10} textAlign="center">
      <Text fontSize="4xl">My URL Shortener</Text>
      <ShortenUrlForm requestShortUrl={requestShortUrl} />
      <UrlList urls={urls} />
    </Container>
  );
}

export default App;
