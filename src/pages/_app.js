import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";

import dynamic from "next/dynamic";

const Connect = dynamic(() => import("@/components/generals/Connect"), {
  ssr: false,
});

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  publicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Connect />
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
