"use client";

import React, { useState } from "react";
import styles from "./ProjectSlider.module.css";

export default function ProjectSlider() {
  const projects = [
    {
      title: "Commercial Solar System",
      location: "Dubai, UAE",
      capacity: "1.5 MW System",
      image: "/assets/project-dubai.png",
      description: "Rooftop commercial installation providing over 40% of the shopping complex's daytime electricity requirements, integrated with local grid feed-in controls."
    },
    {
      title: "50MW Solar Power Plant",
      location: "Texas, USA",
      capacity: "Utility Scale",
      image: "/assets/project-texas.png",
      description: "A vast ground-mounted utility-scale installation tracking the sun, feeding clean energy to local power cooperatives."
    },
    {
      title: "Industrial Solar Solution",
      location: "Johannesburg, South Africa",
      capacity: "800 kW System",
      image: "/assets/project-johannesburg.png",
      description: "Grid-tied solar installation on a large packaging factory roof, optimizing peak demand charges and cutting carbon emissions."
    },
    {
      title: "Home Solar Installation",
      location: "Sydney, Australia",
      capacity: "Off-Grid 15kW",
      image: "/assets/project-sydney.png",
      description: "High-end residential off-grid system featuring high-efficiency panels, solar carports, and home automation battery integration."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContent}>
        {/* Slides Container */}
        <div 
          className={styles.slidesContainer}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, idx) => (
            <div key={idx} className={styles.slide}>
              <div className={styles.projectGrid}>
                {/* Image */}
                <div className={styles.imageCol}>
                  <img src={project.image} alt={project.title} className={styles.projectImg} />
                  <span className={styles.capacityBadge}>{project.capacity}</span>
                </div>

                {/* Details */}
                <div className={styles.detailsCol}>
                  <span className={styles.location}>📍 {project.location}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.projectSpecs}>
                    <div className={styles.specBox}>
                      <span className={styles.specLabel}>Panel Type</span>
                      <span className={styles.specValue}>N-Type Monocrystalline</span>
                    </div>
                    <div className={styles.specBox}>
                      <span className={styles.specLabel}>Inverters</span>
                      <span className={styles.specValue}>Smart String Inverters</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className={styles.controlsRow}>
        <div className={styles.dots}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <div className={styles.arrows}>
          <button onClick={prevSlide} className={styles.arrowBtn} aria-label="Previous Project">
            &larr;
          </button>
          <button onClick={nextSlide} className={styles.arrowBtn} aria-label="Next Project">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
