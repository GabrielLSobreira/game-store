import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { AppProvider } from '../contexts/CartContext';
import { GlobalStyle } from '../styles/globals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <ToastContainer autoClose={2500} />
        <Header />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
