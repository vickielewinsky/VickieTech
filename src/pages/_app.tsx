import '../styles/globals.css';  // Import global CSS if necessary
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />     {/* Global Navbar */}
      <Component {...pageProps} />  {/* Render the content of each page */}
      <Footer />     {/* Global Footer */}
    </>
  );
};

export default MyApp;
