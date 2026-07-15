"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerSlider from "@/components/PartnerSlider";
import ProjectSlider from "@/components/ProjectSlider";
import Calculator from "@/components/Calculator";
import styles from "./page.module.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [quoteSummary, setQuoteSummary] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [projectFilter, setProjectFilter] = useState("all");

  const handleCalculatorQuoteRequest = (summary: string) => {
    setQuoteSummary(summary);
    setContactForm((prev) => ({
      ...prev,
      message: `I would like to request a formal quote for: ${summary}. Please contact me to schedule a site survey.`,
    }));
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setContactForm({ name: "", email: "", phone: "", message: "" });
        setQuoteSummary("");
      }, 5000);
    }
  };

  const allProjects = [
    { title: "Commercial Solar System", location: "Dubai, UAE", type: "commercial", capacity: "1.5 MW", image: "/assets/project-dubai.png" },
    { title: "50MW Solar Power Plant", location: "Texas, USA", type: "utility", capacity: "Utility Scale", image: "/assets/project-texas.png" },
    { title: "Industrial Solar Solution", location: "Johannesburg, South Africa", type: "industrial", capacity: "800 kW", image: "/assets/project-johannesburg.png" },
    { title: "Home Solar Installation", location: "Sydney, Australia", type: "residential", capacity: "15 kW", image: "/assets/project-sydney.png" }
  ];

  const filteredProjects = projectFilter === "all" 
    ? allProjects 
    : allProjects.filter((p) => p.type === projectFilter);

  return (
    <div className={styles.appContainer}>
      {/* Header / Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Pages/Tabs Views */}
      <main className={styles.mainContent}>
        {/* ==================== HOME TAB ==================== */}
        {activeTab === "home" && (
          <div className="animate-fade-in-up">
            {/* Hero Section */}
            <section className={styles.heroSection} style={{ backgroundImage: "linear-gradient(to right, rgba(7, 28, 61, 0.95), rgba(7, 28, 61, 0.4)), url('/assets/hero-bg.png')" }}>
              <div className="container">
                <div className={styles.heroGrid}>
                  <div className={styles.heroTextCol}>
                    <span className={styles.heroSubtitle}>Clean Energy. Endless Possibilities.</span>
                    <h1 className={styles.heroTitle}>Powering a Brighter Future</h1>
                    <p className={styles.heroDesc}>
                      DFQ Solar World delivers reliable, sustainable, and affordable solar energy solutions for homes, businesses, and utility-scale installations across Nigeria and Africa.
                    </p>
                    <div className={styles.heroCtaRow}>
                      <button onClick={() => setActiveTab("solutions")} className={styles.btnPrimary}>
                        Explore Solutions
                      </button>
                      <button onClick={() => setActiveTab("quote")} className={styles.btnSecondary}>
                        Get a Free Quote
                      </button>
                    </div>
                    {/* Trust row */}
                    <div className={styles.trustRow}>
                      <div className={styles.avatarGroup}>
                        <span className={styles.avatar}>🧑‍💼</span>
                        <span className={styles.avatar}>👩‍💼</span>
                        <span className={styles.avatar}>👨‍🔧</span>
                        <span className={styles.avatar}>👩‍🔬</span>
                      </div>
                      <div className={styles.trustText}>
                        <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                        <span>Trusted by 1,000+ customers worldwide</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Value Prop Bar */}
            <section className={styles.valuePropBar}>
              <div className="container">
                <div className={styles.valuePropGrid}>
                  <div className={styles.valueCard}>
                    <span className={styles.valIcon}>☘️</span>
                    <div>
                      <h4 className={styles.valTitle}>Sustainable Energy</h4>
                      <p className={styles.valDesc}>Clean energy solutions for a better tomorrow.</p>
                    </div>
                  </div>
                  <div className={styles.valueCard}>
                    <span className={styles.valIcon}>🛡️</span>
                    <div>
                      <h4 className={styles.valTitle}>Reliable & Efficient</h4>
                      <p className={styles.valDesc}>High-performance systems built to last.</p>
                    </div>
                  </div>
                  <div className={styles.valueCard}>
                    <span className={styles.valIcon}>💰</span>
                    <div>
                      <h4 className={styles.valTitle}>Save More</h4>
                      <p className={styles.valDesc}>Reduce electricity bills and operating costs.</p>
                    </div>
                  </div>
                  <div className={styles.valueCard}>
                    <span className={styles.valIcon}>🎧</span>
                    <div>
                      <h4 className={styles.valTitle}>Expert Support</h4>
                      <p className={styles.valDesc}>End-to-end support from design to maintenance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Solutions Preview Section */}
            <section className={`${styles.solutionsSection} section-padding`}>
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Our Solutions</span>
                  <h2 className={styles.sectionTitle}>Smart Solar Solutions For Every Need</h2>
                  <p className={styles.sectionSubtitle}>
                    We provide customized solar energy systems designed to meet the unique needs of residential, commercial, and industrial clients.
                  </p>
                </div>

                <div className={styles.solutionsGrid}>
                  <div className={styles.solutionCard} onClick={() => setActiveTab("solutions")}>
                    <div className={styles.solImageWrapper}>
                      <img src="/assets/project-sydney.png" alt="Residential Solar" className={styles.solImg} />
                    </div>
                    <div className={styles.solContent}>
                      <span className={styles.solIcon}>🏡</span>
                      <h3 className={styles.solTitle}>Residential Solutions</h3>
                      <p className={styles.solDesc}>Power your home with efficient solar systems and enjoy energy independence.</p>
                      <span className={styles.solLink}>Learn More &rarr;</span>
                    </div>
                  </div>

                  <div className={styles.solutionCard} onClick={() => setActiveTab("solutions")}>
                    <div className={styles.solImageWrapper}>
                      <img src="/assets/project-dubai.png" alt="Commercial Solar" className={styles.solImg} />
                    </div>
                    <div className={styles.solContent}>
                      <span className={styles.solIcon}>🏢</span>
                      <h3 className={styles.solTitle}>Commercial Solutions</h3>
                      <p className={styles.solDesc}>Reduce operational costs and power your business sustainably with solar.</p>
                      <span className={styles.solLink}>Learn More &rarr;</span>
                    </div>
                  </div>

                  <div className={styles.solutionCard} onClick={() => setActiveTab("solutions")}>
                    <div className={styles.solImageWrapper}>
                      <img src="/assets/project-johannesburg.png" alt="Industrial Solar" className={styles.solImg} />
                    </div>
                    <div className={styles.solContent}>
                      <span className={styles.solIcon}>🏭</span>
                      <h3 className={styles.solTitle}>Industrial Solutions</h3>
                      <p className={styles.solDesc}>High-capacity solar solutions for industries and large-scale operations.</p>
                      <span className={styles.solLink}>Learn More &rarr;</span>
                    </div>
                  </div>

                  <div className={styles.solutionCard} onClick={() => setActiveTab("solutions")}>
                    <div className={styles.solImageWrapper}>
                      <img src="/assets/project-texas.png" alt="Energy Storage" className={styles.solImg} />
                    </div>
                    <div className={styles.solContent}>
                      <span className={styles.solIcon}>🔋</span>
                      <h3 className={styles.solTitle}>Energy Storage</h3>
                      <p className={styles.solDesc}>Store energy for when you need it most with our advanced lithium storage systems.</p>
                      <span className={styles.solLink}>Learn More &rarr;</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us Banner */}
            <section className={styles.statsBanner}>
              <div className="container">
                <div className={styles.statsGrid}>
                  <div className={styles.statsInfoCol}>
                    <span className={styles.statsTag}>WHY CHOOSE DFQ SOLAR WORLD?</span>
                    <h2 className={styles.statsTitle}>Innovation. Quality. Sustainability.</h2>
                    <p className={styles.statsDesc}>
                      At DFQ Solar World, we combine cutting-edge technology with unmatched expertise to deliver solar solutions that stand the test of time.
                    </p>
                    <button onClick={() => setActiveTab("about")} className={styles.btnOutlineWhite}>
                      About Us
                    </button>
                  </div>
                  <div className={styles.statsValCol}>
                    <div className={styles.statBox}>
                      <span className={styles.statVal}>1,000+</span>
                      <span className={styles.statLabel}>Projects Completed</span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statVal}>20+</span>
                      <span className={styles.statLabel}>Countries Served</span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statVal}>5,000+</span>
                      <span className={styles.statLabel}>Happy Customers</span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statVal}>15+</span>
                      <span className={styles.statLabel}>Years of Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Project Showcase Slider */}
            <section className={`${styles.projectsSliderSection} section-padding`}>
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Our Projects</span>
                  <h2 className={styles.sectionTitle}>Powering Projects Around The World</h2>
                  <p className={styles.sectionSubtitle}>
                    Explore our recent installations demonstrating our engineering excellence across various sectors.
                  </p>
                </div>
                <ProjectSlider />
              </div>
            </section>

            {/* Testimonials */}
            <section className={styles.testimonialSection}>
              <div className="container">
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteMark}>“</div>
                  <blockquote className={styles.testimonialQuote}>
                    DFQ Solar World delivered beyond our expectations. Their team was professional, the installation was seamless, and the system performance is excellent.
                  </blockquote>
                  <div className={styles.testimonialUser}>
                    <span className={styles.userAvatar}>🧑‍💼</span>
                    <div>
                      <h5 className={styles.userName}>Michael Thompson</h5>
                      <p className={styles.userRole}>CEO, GreenFuture Industries</p>
                    </div>
                  </div>
                  <div className={styles.testimonialLogoBox}>
                    <img src="/assets/logo.png" alt="DFQ Solar World" className={styles.testimonialLogo} />
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Partners */}
            <PartnerSlider />
          </div>
        )}

        {/* ==================== ABOUT TAB ==================== */}
        {activeTab === "about" && (
          <div className="animate-fade-in-up">
            <section className={`${styles.aboutHero} section-padding`}>
              <div className="container">
                <div className={styles.aboutHeader}>
                  <span className={styles.sectionTag}>About Us</span>
                  <h2 className={styles.aboutMainTitle}>Empowering Africa with Clean Energy</h2>
                  <p className={styles.aboutMainDesc}>
                    DFQ Solar World is a premier renewable energy developer and engineering contractor. Founded on the principles of quality, reliability, and innovation, we provide high-performance off-grid and grid-connected solar power systems.
                  </p>
                </div>

                <div className={styles.missionVisionGrid}>
                  <div className={styles.mvCard}>
                    <span className={styles.mvIcon}>🎯</span>
                    <h3>Our Mission</h3>
                    <p>To provide affordable, reliable, and sustainable solar energy solutions across Nigeria and Africa, building a cleaner environment for future generations.</p>
                  </div>
                  <div className={styles.mvCard}>
                    <span className={styles.mvIcon}>👁️</span>
                    <h3>Our Vision</h3>
                    <p>To become Africa's leading renewable energy enterprise, recognized for world-class solar engineering and community-focused electrification programs.</p>
                  </div>
                </div>

                <div className={styles.valuesSection}>
                  <h3 className={styles.valuesTitle}>Our Core Values</h3>
                  <div className={styles.valuesGrid}>
                    <div className={styles.valueBox}>
                      <span className={styles.vIcon}>💡</span>
                      <h4>Innovation</h4>
                      <p>Adopting advanced smart solar tech and storage integrations to maximize performance.</p>
                    </div>
                    <div className={styles.valueBox}>
                      <span className={styles.vIcon}>🤝</span>
                      <h4>Integrity</h4>
                      <p>Building trust through transparent pricing, verified specifications, and honest consulting.</p>
                    </div>
                    <div className={styles.valueBox}>
                      <span className={styles.vIcon}>🌱</span>
                      <h4>Sustainability</h4>
                      <p>Minimizing environmental impacts and carbon footprints through clean energy adoption.</p>
                    </div>
                    <div className={styles.valueBox}>
                      <span className={styles.vIcon}>🏆</span>
                      <h4>Excellence</h4>
                      <p>Upholding standard engineering protocols for robust, safe, and efficient installations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== SOLUTIONS TAB ==================== */}
        {activeTab === "solutions" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Engineered Services</span>
                  <h2 className={styles.sectionTitle}>Solar Solutions Customized for Every Scale</h2>
                  <p className={styles.sectionSubtitle}>
                    We handle everything from initial feasibility analysis and 3D layout simulation to delivery, engineering construction, and asset maintenance.
                  </p>
                </div>

                <div className={styles.fullSolutionsGrid}>
                  <div className={styles.fullSolRow}>
                    <div className={styles.fullSolDetails}>
                      <h3>🏡 Residential Systems</h3>
                      <p>Enjoy uninterrupted power and break free from grid instability. Our residential systems are designed to fit your roof space and budget, offering a blend of panels, smart inverters, and battery backups.</p>
                      <ul>
                        <li>Smart load management & switching</li>
                        <li>High-efficiency roof tiles and modules</li>
                        <li>Overnight silent battery power</li>
                        <li>Mobile App performance monitoring</li>
                      </ul>
                      <button onClick={() => setActiveTab("quote")} className={styles.btnPrimary}>Size Your Home System</button>
                    </div>
                    <div className={styles.fullSolImage}>
                      <img src="/assets/project-sydney.png" alt="Residential System" />
                    </div>
                  </div>

                  <div className={styles.fullSolRow}>
                    <div className={styles.fullSolImage}>
                      <img src="/assets/project-dubai.png" alt="Commercial System" />
                    </div>
                    <div className={styles.fullSolDetails}>
                      <h3>🏢 Commercial Systems</h3>
                      <p>Protect your business margins against peak utility tariffs and diesel generator fuel costs. Our commercial rooftop and carport solar solutions provide stable, clean power during your peak operating hours.</p>
                      <ul>
                        <li>Peak load shaving & demand charge reductions</li>
                        <li>Corporate sustainability and ESG compliance</li>
                        <li>High-durability structures (25+ year lifespan)</li>
                        <li>Accelerated tax write-offs for green assets</li>
                      </ul>
                      <button onClick={() => setActiveTab("contact")} className={styles.btnPrimary}>Request Corporate Audit</button>
                    </div>
                  </div>

                  <div className={styles.fullSolRow}>
                    <div className={styles.fullSolDetails}>
                      <h3>🏭 Industrial Systems</h3>
                      <p>Power continuous production lines and manufacturing machinery with megawatt-scale solar arrays. We design robust microgrids with battery buffers to eliminate power quality sags and plant stoppages.</p>
                      <ul>
                        <li>Mega-watt scale ground and roof installations</li>
                        <li>Microgrid controller integrations (solar + grid + gen)</li>
                        <li>Harmonic filtering and power factor corrections</li>
                        <li>Comprehensive O&M maintenance contracts</li>
                      </ul>
                      <button onClick={() => setActiveTab("contact")} className={styles.btnPrimary}>Speak with an Engineer</button>
                    </div>
                    <div className={styles.fullSolImage}>
                      <img src="/assets/project-johannesburg.png" alt="Industrial System" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== PROJECTS TAB ==================== */}
        {activeTab === "projects" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Global Portfolio</span>
                  <h2 className={styles.sectionTitle}>Engineering Projects Worldwide</h2>
                  <p className={styles.sectionSubtitle}>
                    A showcase of our installations engineered to international standards across commercial, industrial, utility, and residential sectors.
                  </p>
                </div>

                {/* Filters */}
                <div className={styles.filtersRow}>
                  {["all", "commercial", "utility", "industrial", "residential"].map((filter) => (
                    <button
                      key={filter}
                      className={`${styles.filterBtn} ${projectFilter === filter ? styles.filterActive : ""}`}
                      onClick={() => setProjectFilter(filter)}
                    >
                      {filter.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Projects Grid */}
                <div className={styles.projectsGalleryGrid}>
                  {filteredProjects.map((project, idx) => (
                    <div key={idx} className={styles.galleryCard}>
                      <div className={styles.galleryImgBox}>
                        <img src={project.image} alt={project.title} />
                        <span className={styles.galleryBadge}>{project.capacity}</span>
                      </div>
                      <div className={styles.galleryContent}>
                        <span className={styles.galleryLoc}>📍 {project.location}</span>
                        <h4>{project.title}</h4>
                        <p>Fully commissioned solar grid integration delivering stable power output with certified metrics.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== PRODUCTS TAB ==================== */}
        {activeTab === "products" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Product Catalog</span>
                  <h2 className={styles.sectionTitle}>High-Efficiency Solar Components</h2>
                  <p className={styles.sectionSubtitle}>
                    We supply and install only grade-A certified products from leading manufacturers, ensuring maximum reliability and system lifespans.
                  </p>
                </div>

                <div className={styles.productsGrid}>
                  {/* Panels */}
                  <div className={styles.productCard}>
                    <div className={styles.productBadge}>Tier-1</div>
                    <span className={styles.productIcon}>☀️</span>
                    <h3>DFQ Solar Panels</h3>
                    <p className={styles.productDesc}>High-efficiency N-Type Bifacial Monocrystalline modules (550W+). Delivers exceptional output even in low-light and high-temperature environments.</p>
                    <ul className={styles.productSpecsList}>
                      <li>Efficiency: Up to 22.5%</li>
                      <li>Warranty: 25 Years Performance</li>
                      <li>Frame: Anodized Aluminum Alloy</li>
                    </ul>
                  </div>

                  {/* Batteries */}
                  <div className={`${styles.productCard} ${styles.productHighlight}`}>
                    <div className={styles.productBadgeFeatured}>Featured Partner Product</div>
                    <span className={styles.productIcon}>🔋</span>
                    <h3>Felicity Solar Lithium Battery</h3>
                    <p className={styles.productDesc}>Wall-mounted Lithium Iron Phosphate (LiFePO4) storage systems (5kWh & 10kWh packs). Built for continuous cycle durability in demanding climates.</p>
                    <ul className={styles.productSpecsList}>
                      <li>Cycles: &gt; 6,000 cycles @ 80% DoD</li>
                      <li>Warranty: 10 Years Strategic coverage</li>
                      <li>Smart BMS: Built-in safety and balancing</li>
                    </ul>
                  </div>

                  {/* Inverters */}
                  <div className={styles.productCard}>
                    <div className={styles.productBadge}>Smart Tech</div>
                    <span className={styles.productIcon}>⚡</span>
                    <h3>DFQ Hybrid Inverters</h3>
                    <p className={styles.productDesc}>Smart multi-mode hybrid inverters (3.5kVA to 50kVA). Coordinates power between solar arrays, lithium battery storage, utilities, and backup generators.</p>
                    <ul className={styles.productSpecsList}>
                      <li>Transfer: &lt; 10ms seamless switching</li>
                      <li>Phase: Single and 3-Phase outputs</li>
                      <li>Control: Built-in MPPT chargers</li>
                    </ul>
                  </div>

                  {/* Solar Lights */}
                  <div className={styles.productCard}>
                    <div className={styles.productBadge}>Outdoor</div>
                    <span className={styles.productIcon}>💡</span>
                    <h3>Smart Solar Street Lights</h3>
                    <p className={styles.productDesc}>All-in-one solar street and compound lighting solutions. Features high-capacity lithium buffers, daylight sensors, and motion dimmers.</p>
                    <ul className={styles.productSpecsList}>
                      <li>Lumens: 8,000 - 15,000 lm</li>
                      <li>Battery: High-grade LiFePO4 pack</li>
                      <li>Sensing: Auto night-switch + PIR motion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== CALCULATOR / QUOTE TAB ==================== */}
        {activeTab === "quote" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Interactive Calculator</span>
                  <h2 className={styles.sectionTitle}>Sizing & Cost Estimator</h2>
                  <p className={styles.sectionSubtitle}>
                    Slide your current electricity parameters to calculate the recommended solar array, inverter size, battery capacity, and estimated installation cost.
                  </p>
                </div>
                <Calculator onQuoteRequest={handleCalculatorQuoteRequest} />
              </div>
            </section>
          </div>
        )}

        {/* ==================== CONTACT TAB ==================== */}
        {activeTab === "contact" && (
          <div className="animate-fade-in-up">
            <section className="section-padding">
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTag}>Get In Touch</span>
                  <h2 className={styles.sectionTitle}>Ready to Power Your Property?</h2>
                  <p className={styles.sectionSubtitle}>
                    Send us a message or request a site survey. Our engineering team will review your specs and contact you within 24 hours.
                  </p>
                </div>

                <div className={styles.contactContainer}>
                  {/* Form */}
                  <div className={styles.contactFormBox}>
                    <h3 className={styles.contactFormTitle}>Submit Site Details</h3>
                    {quoteSummary && (
                      <div className={styles.quoteSummaryAlert}>
                        <strong>Selected Quote Setup:</strong> {quoteSummary}
                      </div>
                    )}

                    <form onSubmit={handleContactSubmit} className={styles.form}>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            className={styles.formInput}
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            className={styles.formInput}
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+234 800 000 0000"
                          className={styles.formInput}
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Message & Site Details *</label>
                        <textarea
                          rows={5}
                          required
                          placeholder="Describe your load requirements or copy calculator results..."
                          className={styles.formTextarea}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        />
                      </div>

                      <button type="submit" className={styles.formSubmitBtn}>
                        Submit Request
                      </button>

                      {submitted && (
                        <div className={styles.toastSuccess}>
                          ✅ Request received successfully! Our engineer will call you shortly.
                        </div>
                      )}
                    </form>
                  </div>

                  {/* Office Info */}
                  <div className={styles.contactInfoBox}>
                    <h3 className={styles.contactInfoTitle}>Corporate Head Office</h3>
                    <div className={styles.infoList}>
                      <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>📍</span>
                        <div>
                          <h5>DFQ Solar World HQ</h5>
                          <p>123 Solar Way, Green City, California, USA</p>
                        </div>
                      </div>

                      <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>📞</span>
                        <div>
                          <h5>Phone & Hotline</h5>
                          <p>+1 (123) 456-7890</p>
                          <p>+234 801 234 5678 (Lagos Office)</p>
                        </div>
                      </div>

                      <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>✉️</span>
                        <div>
                          <h5>Email Address</h5>
                          <p>info@dfqsolarworld.com</p>
                          <p>support@dfqsolarworld.com</p>
                        </div>
                      </div>

                      <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>🕒</span>
                        <div>
                          <h5>Office Hours</h5>
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 9:00 AM - 1:00 PM (Emergency maintenance only)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
