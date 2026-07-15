"use client";

import React from "react";
import styles from "./PartnerSlider.module.css";

export default function PartnerSlider() {
  const partners = [
    { name: "LONGi", logo: "/assets/partner-longi.png" },
    { name: "JinkoSolar", logo: "/assets/partner-jinko.png" },
    { name: "Solis", logo: "/assets/partner-solis.png" },
    { name: "Sungrow", logo: "/assets/partner-sungrow.png" },
    { name: "Trina Solar", logo: "/assets/partner-trina.png" },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>Strategic Alliances</span>
          <h2 className={styles.title}>Our Global Partners</h2>
          <p className={styles.subtitle}>
            We collaborate with tier-1 global manufacturers to deliver state-of-the-art solar engineering across Africa.
          </p>
        </div>

        {/* Global Partners Slider / Grid */}
        <div className={styles.sliderContainer}>
          <div className={styles.track}>
            {/* Double the list for infinite marquee animation */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className={styles.logoItem}>
                <div className={styles.logoBox}>
                  <div className={styles.partnerLogoWrapper}>
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} Logo`} 
                      className={styles.partnerLogo} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
