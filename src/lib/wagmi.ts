import { cookieStorage, createConfig, createStorage, http, noopStorage } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

import { connectors } from './connectors';

export const config = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum, base],
  connectors,
  // Use noopStorage for SSR to completely disable persistence on server
  // We cannot use cookieStorage on server as req.headers is not accessible on SSG mode
  storage: createStorage({
    storage: typeof window !== 'undefined' ? cookieStorage : noopStorage,
  }),
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
