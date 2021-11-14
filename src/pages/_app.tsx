import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { AppProvider } from '../contexts/CartContext';
import { GlobalStyle } from '../styles/globals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <SEO
          title="Next Games"
          description="A melhor loja de jogos do Brasil"
        />
        <GlobalStyle />
        <ToastContainer autoClose={2500} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </>
  );
}

export default MyApp;
