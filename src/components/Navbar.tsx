import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [language, setLanguage] = useState('en'); // English by default

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'sw' : 'en'); // Toggle between English and Kiswahili
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">VickieTech</Link>
      </div>

      <ul className={styles.navList}>
        <li><Link href="/">{language === 'en' ? 'Home' : 'Nyumbani'}</Link></li>
        <li><Link href="/about">{language === 'en' ? 'About' : 'Kuhusu'}</Link></li>
        <li><Link href="/skills">{language === 'en' ? 'Skills' : 'Ujuzi'}</Link></li>
        <li><Link href="/contact">{language === 'en' ? 'Contact' : 'Wasiliana'}</Link></li>

        {/* Services Dropdown */}
        <li className={styles.dropdown}>
          <span className={styles.servicesLink}>{language === 'en' ? 'Services' : 'Huduma'}</span>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/services/web-development">{language === 'en' ? 'Web Development' : 'Uendelezaji wa Tovuti'}</Link></li>
            <li><Link href="/services/database-management">{language === 'en' ? 'Database Management' : 'Usimamizi wa Hifadhidata'}</Link></li>
            <li><Link href="/services/coding">{language === 'en' ? 'Programming & Coding' : 'Programu & Uandishi wa Misimbo'}</Link></li>
            <li><Link href="/services/troubleshooting">{language === 'en' ? 'Troubleshooting' : 'Utatuzi wa Matatizo'}</Link></li>
          </ul>
        </li>

        {/* Language Toggle */}
        <li>
          <button onClick={handleLanguageToggle} className={styles.languageToggle}>
            {language === 'en' ? 'Switch to Kiswahili' : 'Switch to English'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
