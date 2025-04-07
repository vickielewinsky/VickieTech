// src/pages/_app.tsx
import Layout from '../components/Layout';
import '../styles/globals.css'; // Global styles

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
