// src/components/Layout.tsx
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main> {/* Content goes here */}
      <Footer />
    </>
  );
};

export default Layout;
