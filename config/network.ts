import type { AppConfig } from './app'

export const mainnetConfig: AppConfig = {
  chainId: 'juno-1',
  chainName: 'Juno',
  addressPrefix: 'juno',
  rpcUrl: 'https://rpc.juno-1.deuslabs.fi',
  // httpUrl: "https://rpc.juno-1.deuslabs.fi",
  feeToken: 'ujuno',
  stakingToken: 'ujuno',
  coinMap: {
    ujuno: { denom: 'JUNO', fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  fees: {
    upload: 1500000,
    init: 500000,
    exec: 200000,
  },
}

export const uniTestnetConfig: AppConfig = {
  chainId: 'pion-1',
  chainName: 'Neutron-Pion',
  addressPrefix: 'neutron',
  rpcUrl: 'https://rpc.pion.rs-testnet.polypore.xyz/',
  httpUrl: 'https://rest.pion.rs-testnet.polypore.xyz/',
  faucetUrl: 'nil',
  feeToken: 'untrn',
  stakingToken: 'untrn',
  coinMap: {
    untrn: { denom: 'NTRN', fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  fees: {
    upload: 1500000,
    init: 500000,
    exec: 200000,
  },
}

export const getConfig = (network: string): AppConfig => {
  if (network === 'mainnet') return mainnetConfig
  return uniTestnetConfig
}
