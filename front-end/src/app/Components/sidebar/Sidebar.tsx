"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.sass';
import { FaHome, FaChartBar, FaUserAlt, FaTasks, FaCog, FaInfo, FaQuestionCircle } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: '/admin/dashboard', label: 'Home', icon: <FaHome /> },
    { href: '/analytics', label: 'Análises', icon: <FaChartBar /> },
    { href: '/users', label: 'Usuários', icon: <FaUserAlt /> },
    { href: '/resolveds', label: 'Resolvidos', icon: <FaTasks /> },
    { href: '/settings', label: 'Configurações', icon: <FaCog /> },
    { href: '/about', label: 'Sobre', icon: <FaInfo /> },
    { href: '/feedback', label: 'Feedback', icon: <FaQuestionCircle /> },
  ];

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>Sistema chamados</h2>
      <nav className={styles.nav}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
          >
            <span className={styles.icon}>{link.icon}</span> {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.divider}></div>

      {/* <div className={styles.profile}>
        <div className={styles.avatar}></div>
        <div className={styles.info}>
          <p>Riley Carter</p>
          <p>riley@email.com</p>
        </div>
        <div className={styles.options}>...</div>
      </div> */}
    </div>
  );
};

export default Sidebar;
