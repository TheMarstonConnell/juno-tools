import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import type { WalletManager } from '@cosmos-kit/core'
import { useWallet } from '@cosmos-kit/react'
import Head from 'next/head'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

import { WalletSection } from '../components/walletConnect'

const getWallet = async (wallet: WalletManager) => {
  await wallet
    .getSigningCosmWasmClient()
    .then((client) => {
      console.log(client)
    })
    .catch((error) => {
      console.log(error)
    })
}

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const wallet = useWallet()
  void getWallet(wallet)

  return (
    <Container maxW="5xl" py={10}>
      <Head>
        <title>Create Cosmos App</title>
        <meta content="Generated by create cosmos app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Flex justifyContent="end" mb={4}>
        <Button onClick={toggleColorMode} px={0} variant="outline">
          <Icon as={colorMode === 'light' ? BsFillMoonStarsFill : BsFillSunFill} />
        </Button>
      </Flex>
      <Box textAlign="center">
        <Heading as="h1" fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }} fontWeight="extrabold" mb={3}>
          Create Cosmos App
        </Heading>
        <Heading as="h1" fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} fontWeight="bold">
          <Text as="span">Welcome to&nbsp;</Text>
          <Text as="span" color={useColorModeValue('primary.500', 'primary.200')}>
            CosmosKit + Next.js
          </Text>
        </Heading>
      </Box>
      <WalletSection />
      <Grid
        gap={8}
        mb={14}
        templateColumns={{
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
      />
      <Box mb={3}>
        <Divider />
      </Box>
      <Stack fontSize="sm" isInline justifyContent="center" opacity={0.5} spacing={1}>
        <Text>Built with</Text>
        <Link href="https://cosmology.tech/" rel="noopener noreferrer" target="_blank">
          Cosmology
        </Link>
      </Stack>
    </Container>
  )
}
