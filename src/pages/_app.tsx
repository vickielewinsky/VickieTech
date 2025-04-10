// src/pages/_app.tsx
import Layout from '../components/Layout';
import '../styles/globals.css'; // Global styles
import { AppProps } from 'next/app'; // Importing the type for Next.js App props

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
