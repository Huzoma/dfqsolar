"use client";

import React, { useState } from "react";
import { Phone, Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
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
        {/* Logo (Transparent PNG) */}
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
            <span className={styles.arrowIconWrapper}>
              <ArrowRight className={`${styles.arrowIcon} ${styles.arrowNormal}`} size={16} />
              <ArrowUpRight className={`${styles.arrowIcon} ${styles.arrowRightHovered}`} size={16} />
            </span>
          </button>
        </div>

        {/* Mobile Call & Menu Toggles */}
        <div className={styles.mobileToggles}>
          <a href="https://wa.me/+2349122896507" className={styles.mobilePhoneBtn} aria-label="Call Customer Hotline">
            <Phone size={18} fill="currentColor" />
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
