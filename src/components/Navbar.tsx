"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "solutions", label: "Solutions" },
    { id: "projects", label: "Projects" },
    { id: "products", label: "Products" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    // Scroll to top when changing tab
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        {/* Logo */}
        <div className={styles.logoContainer} onClick={() => handleNavClick("home")}>
          <img src="/assets/logo.png" alt="DFQ Solar World Logo" className={styles.logo} />
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <button
                  className={`${styles.navLink} ${activeTab === item.id ? styles.active : ""}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <button
            className={styles.ctaButton}
            onClick={() => handleNavClick("quote")}
          >
            Get a Quote
            <span className={styles.ctaArrow}>&rarr;</span>
          </button>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <ul className={styles.mobileNavList}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.mobileNavItem}>
              <button
                className={`${styles.mobileNavLink} ${activeTab === item.id ? styles.mobileActive : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className={styles.mobileNavItem}>
            <button
              className={styles.mobileCtaButton}
              onClick={() => handleNavClick("quote")}
            >
              Get a Quote
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
