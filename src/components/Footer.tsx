"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import styles from "./Footer.module.css";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Logo & Description */}
          <div className={styles.col}>
            <div className={styles.logoContainer} onClick={() => handleLinkClick("home")}>
              <img src="/assets/logo-white.png" alt="DFQ Solar World Logo" className={styles.logo} />
            </div>
            <p className={styles.description}>
              DFQ Solar World is a global leader in solar energy solutions. We are committed to providing clean, reliable, and affordable energy for a sustainable future.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><button onClick={() => handleLinkClick("home")} className={styles.link}>Home</button></li>
              <li><button onClick={() => handleLinkClick("about")} className={styles.link}>About Us</button></li>
              <li><button onClick={() => handleLinkClick("solutions")} className={styles.link}>Solutions</button></li>
              <li><button onClick={() => handleLinkClick("projects")} className={styles.link}>Projects</button></li>
              <li><button onClick={() => handleLinkClick("products")} className={styles.link}>Products</button></li>
              <li><button onClick={() => handleLinkClick("contact")} className={styles.link}>Contact Us</button></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.linksList}>
              <li><button onClick={() => handleLinkClick("solutions")} className={styles.link}>Residential Solutions</button></li>
              <li><button onClick={() => handleLinkClick("solutions")} className={styles.link}>Commercial Solutions</button></li>
              <li><button onClick={() => handleLinkClick("solutions")} className={styles.link}>Industrial Solutions</button></li>
              <li><button onClick={() => handleLinkClick("solutions")} className={styles.link}>Energy Storage</button></li>
              <li><button onClick={() => handleLinkClick("solutions")} className={styles.link}>Solar Maintenance</button></li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactInfo}>
              <li>
                <MapPin size={16} className={styles.contactIcon} />
                <span>123 Solar Way, Green City, California, USA</span>
              </li>
              <li>
                <Phone size={16} className={styles.contactIcon} />
                <span>+1 (123) 456-7890</span>
              </li>
              <li>
                <Mail size={16} className={styles.contactIcon} />
                <span>info@dfqsolarworld.com</span>
              </li>
              <li>
                <Globe size={16} className={styles.contactIcon} />
                <span>www.dfqsolarworld.com</span>
              </li>
            </ul>

            <h4 className={`${styles.colTitle} ${styles.newsletterTitle}`}>Newsletter</h4>
            <p className={styles.newsletterText}>
              Subscribe to get the latest updates on our products and solutions.
            </p>
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.newsletterSubmit} aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>
            {subscribed && (
              <span className={styles.subscribedMsg}>Subscribed successfully!</span>
            )}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} DFQ Solar World. All Rights Reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
