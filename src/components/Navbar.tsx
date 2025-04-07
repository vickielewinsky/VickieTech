// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/skills">Skills</Link></li> {/* Skills moved here */}
        <li><Link href="/contact">Contact</Link></li> {/* Contact moved here */}
      </ul>
    </nav>
  );
};

export default Navbar;
