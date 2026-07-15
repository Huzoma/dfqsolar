"use client";

import React from "react";
import styles from "./PartnerSlider.module.css";

export default function PartnerSlider() {
  const partners = [
    { name: "LONGi", logoText: "LONGi", color: "#E31B23" },
    { name: "JinkoSolar", logoText: "JinkoSolar", color: "#78B13F" },
    { name: "HUAWEI", logoText: "HUAWEI", color: "#ED1C24" },
    { name: "Solis", logoText: "solis", color: "#F39200" },
    { name: "Sungrow", logoText: "SUNGROW", color: "#E50012" },
    { name: "Trina Solar", logoText: "Trinasolar", color: "#0055A5" },
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

        {/* Major Partner Highlight */}
        <div className={styles.majorPartnerCard}>
          <div className={styles.badge}>Major Strategic Partner</div>
          <div className={styles.majorPartnerGrid}>
            <div className={styles.majorPartnerLogoCol}>
              <div className={styles.felicityLogoBox}>
                <span className={styles.felicityLogoCircle}>F</span>
                <span className={styles.felicityText}>
                  felicity<span className={styles.orangeText}>solar</span>
                </span>
              </div>
            </div>
            <div className={styles.majorPartnerInfoCol}>
              <h3 className={styles.majorPartnerTitle}>Felicity Solar Partnership</h3>
              <p className={styles.majorPartnerDesc}>
                DFQ Solar World works in deep integration with <strong>Felicity Solar</strong> as our primary technology manufacturer. This partnership brings advanced lithium iron phosphate (LiFePO4) energy storage, intelligent hybrid inverters, and high-capacity solar arrays directly to the African market with certified local warranties and engineering support.
              </p>
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specVal}>10+ Years</span>
                  <span className={styles.specLabel}>Warranty coverage</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specVal}>LiFePO4</span>
                  <span className={styles.specLabel}>Advanced battery tech</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specVal}>Grade A+</span>
                  <span className={styles.specLabel}>Cell certification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Global Partners Slider / Grid */}
        <div className={styles.sliderContainer}>
          <p className={styles.otherTitle}>Authorized Tier-1 Partners</p>
          <div className={styles.track}>
            {/* Double the list for infinite marquee animation */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className={styles.logoItem}>
                <div className={styles.logoBox} style={{ borderTopColor: partner.color }}>
                  <span className={styles.logoName} style={{ color: partner.color }}>
                    {partner.logoText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
