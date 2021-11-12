import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { AppProvider } from '../contexts/CartContext';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
